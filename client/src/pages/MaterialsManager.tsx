import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import FileUploadZone from "@/components/FileUploadZone";
import { Download, Trash2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function MaterialsManager() {
  const { user, isAuthenticated } = useAuth();
  const utils = trpc.useUtils();

  const { data: files, isLoading } = trpc.files.list.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  const deleteMutation = trpc.files.delete.useMutation({
    onSuccess: () => {
      toast.success("Arquivo deletado com sucesso");
      utils.files.list.invalidate();
    },
    onError: () => {
      toast.error("Erro ao deletar arquivo");
    },
  });

  const handleDelete = (fileId: number) => {
    if (confirm("Tem certeza que deseja deletar este arquivo?")) {
      deleteMutation.mutate({ fileId });
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 text-center">
          <p className="text-lg font-medium mb-4">
            Você precisa estar logado para acessar esta página
          </p>
          <Button onClick={() => (window.location.href = "/")}>
            Voltar para Home
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Gerenciador de Materiais</h1>
          <p className="text-muted-foreground">
            Faça upload e gerencie os materiais da oficina Grana Jovem
          </p>
        </div>

        {/* Upload Section */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Enviar Novo Material</h2>
          <FileUploadZone
            category="material"
            onUploadSuccess={() => utils.files.list.invalidate()}
          />
        </Card>

        {/* Files List */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Meus Arquivos</h2>

          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : files && files.length > 0 ? (
            <div className="space-y-3">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="font-medium">{file.fileName}</h3>
                    <div className="flex gap-4 text-sm text-muted-foreground mt-1">
                      <span>{formatFileSize(file.fileSize)}</span>
                      <span>
                        {formatDistanceToNow(new Date(file.createdAt), {
                          addSuffix: true,
                          locale: ptBR,
                        })}
                      </span>
                      {file.category && (
                        <span className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs">
                          {file.category}
                        </span>
                      )}
                    </div>
                    {file.description && (
                      <p className="text-sm text-muted-foreground mt-2">
                        {file.description}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                    >
                      <a href={file.fileUrl} download>
                        <Download className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(file.id)}
                      disabled={deleteMutation.isPending}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <p>Nenhum arquivo enviado ainda</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
