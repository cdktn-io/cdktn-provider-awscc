# `lambdaMicrovmImage` Submodule <a name="`lambdaMicrovmImage` Submodule" id="@cdktn/provider-awscc.lambdaMicrovmImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaMicrovmImage <a name="LambdaMicrovmImage" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image awscc_lambda_microvm_image}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImage;

LambdaMicrovmImage.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .additionalOsCapabilities(java.util.List<java.lang.String>)
    .baseImageArn(java.lang.String)
    .baseImageVersion(java.lang.String)
    .buildRoleArn(java.lang.String)
    .codeArtifact(LambdaMicrovmImageCodeArtifact)
    .cpuConfigurations(IResolvable|java.util.List<LambdaMicrovmImageCpuConfigurations>)
    .description(java.lang.String)
    .egressNetworkConnectors(java.util.List<java.lang.String>)
    .environmentVariables(IResolvable|java.util.List<LambdaMicrovmImageEnvironmentVariables>)
    .hooks(LambdaMicrovmImageHooks)
    .logging(LambdaMicrovmImageLogging)
    .name(java.lang.String)
    .resources(IResolvable|java.util.List<LambdaMicrovmImageResources>)
//  .tags(IResolvable|java.util.List<LambdaMicrovmImageTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.additionalOsCapabilities">additionalOsCapabilities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#additional_os_capabilities LambdaMicrovmImage#additional_os_capabilities}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.baseImageArn">baseImageArn</a></code> | <code>java.lang.String</code> | ARN of the base MicroVM image. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.baseImageVersion">baseImageVersion</a></code> | <code>java.lang.String</code> | Specific version of the base MicroVM image to use. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.buildRoleArn">buildRoleArn</a></code> | <code>java.lang.String</code> | ARN of the IAM build role. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.codeArtifact">codeArtifact</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a></code> | Code artifact for the active MicroVM image. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.cpuConfigurations">cpuConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#cpu_configurations LambdaMicrovmImage#cpu_configurations}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the MicroVM image and its purpose. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.egressNetworkConnectors">egressNetworkConnectors</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#egress_network_connectors LambdaMicrovmImage#egress_network_connectors}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.environmentVariables">environmentVariables</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>></code> | Environment variables to set in the container during the snapshot build. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.hooks">hooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#hooks LambdaMicrovmImage#hooks}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.logging">logging</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a></code> | Configuration for MicroVM image logging. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Unique name for the MicroVM image within the account. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.resources">resources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#resources LambdaMicrovmImage#resources}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>></code> | Key-value pairs to associate with the MicroVM image for organization and management. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `additionalOsCapabilities`<sup>Required</sup> <a name="additionalOsCapabilities" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.additionalOsCapabilities"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#additional_os_capabilities LambdaMicrovmImage#additional_os_capabilities}.

---

##### `baseImageArn`<sup>Required</sup> <a name="baseImageArn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.baseImageArn"></a>

- *Type:* java.lang.String

ARN of the base MicroVM image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#base_image_arn LambdaMicrovmImage#base_image_arn}

---

##### `baseImageVersion`<sup>Required</sup> <a name="baseImageVersion" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.baseImageVersion"></a>

- *Type:* java.lang.String

Specific version of the base MicroVM image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#base_image_version LambdaMicrovmImage#base_image_version}

---

##### `buildRoleArn`<sup>Required</sup> <a name="buildRoleArn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.buildRoleArn"></a>

- *Type:* java.lang.String

ARN of the IAM build role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#build_role_arn LambdaMicrovmImage#build_role_arn}

---

##### `codeArtifact`<sup>Required</sup> <a name="codeArtifact" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.codeArtifact"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a>

Code artifact for the active MicroVM image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#code_artifact LambdaMicrovmImage#code_artifact}

---

##### `cpuConfigurations`<sup>Required</sup> <a name="cpuConfigurations" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.cpuConfigurations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#cpu_configurations LambdaMicrovmImage#cpu_configurations}.

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Human-readable description of the MicroVM image and its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#description LambdaMicrovmImage#description}

---

##### `egressNetworkConnectors`<sup>Required</sup> <a name="egressNetworkConnectors" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.egressNetworkConnectors"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#egress_network_connectors LambdaMicrovmImage#egress_network_connectors}.

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.environmentVariables"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>>

Environment variables to set in the container during the snapshot build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#environment_variables LambdaMicrovmImage#environment_variables}

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.hooks"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#hooks LambdaMicrovmImage#hooks}.

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.logging"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a>

Configuration for MicroVM image logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#logging LambdaMicrovmImage#logging}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Unique name for the MicroVM image within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#name LambdaMicrovmImage#name}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.resources"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#resources LambdaMicrovmImage#resources}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>>

Key-value pairs to associate with the MicroVM image for organization and management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#tags LambdaMicrovmImage#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCodeArtifact">putCodeArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCpuConfigurations">putCpuConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putEnvironmentVariables">putEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putHooks">putHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putLogging">putLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCodeArtifact` <a name="putCodeArtifact" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCodeArtifact"></a>

```java
public void putCodeArtifact(LambdaMicrovmImageCodeArtifact value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCodeArtifact.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a>

---

##### `putCpuConfigurations` <a name="putCpuConfigurations" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCpuConfigurations"></a>

```java
public void putCpuConfigurations(IResolvable|java.util.List<LambdaMicrovmImageCpuConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCpuConfigurations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>>

---

##### `putEnvironmentVariables` <a name="putEnvironmentVariables" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putEnvironmentVariables"></a>

```java
public void putEnvironmentVariables(IResolvable|java.util.List<LambdaMicrovmImageEnvironmentVariables> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putEnvironmentVariables.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>>

---

##### `putHooks` <a name="putHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putHooks"></a>

```java
public void putHooks(LambdaMicrovmImageHooks value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putHooks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a>

---

##### `putLogging` <a name="putLogging" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putLogging"></a>

```java
public void putLogging(LambdaMicrovmImageLogging value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a>

---

##### `putResources` <a name="putResources" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putResources"></a>

```java
public void putResources(IResolvable|java.util.List<LambdaMicrovmImageResources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putResources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<LambdaMicrovmImageTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaMicrovmImage resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isConstruct"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImage;

LambdaMicrovmImage.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImage;

LambdaMicrovmImage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImage;

LambdaMicrovmImage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImage;

LambdaMicrovmImage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LambdaMicrovmImage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LambdaMicrovmImage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LambdaMicrovmImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LambdaMicrovmImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LambdaMicrovmImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.codeArtifact">codeArtifact</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference">LambdaMicrovmImageCodeArtifactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cpuConfigurations">cpuConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList">LambdaMicrovmImageCpuConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.environmentVariables">environmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList">LambdaMicrovmImageEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.hooks">hooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference">LambdaMicrovmImageHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.imageArn">imageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.latestActiveImageVersion">latestActiveImageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.latestFailedImageVersion">latestFailedImageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference">LambdaMicrovmImageLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList">LambdaMicrovmImageResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList">LambdaMicrovmImageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.additionalOsCapabilitiesInput">additionalOsCapabilitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageArnInput">baseImageArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageVersionInput">baseImageVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.buildRoleArnInput">buildRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.codeArtifactInput">codeArtifactInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cpuConfigurationsInput">cpuConfigurationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.egressNetworkConnectorsInput">egressNetworkConnectorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.hooksInput">hooksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.loggingInput">loggingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.resourcesInput">resourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.additionalOsCapabilities">additionalOsCapabilities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageArn">baseImageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageVersion">baseImageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.buildRoleArn">buildRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.egressNetworkConnectors">egressNetworkConnectors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `codeArtifact`<sup>Required</sup> <a name="codeArtifact" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.codeArtifact"></a>

```java
public LambdaMicrovmImageCodeArtifactOutputReference getCodeArtifact();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference">LambdaMicrovmImageCodeArtifactOutputReference</a>

---

##### `cpuConfigurations`<sup>Required</sup> <a name="cpuConfigurations" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cpuConfigurations"></a>

```java
public LambdaMicrovmImageCpuConfigurationsList getCpuConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList">LambdaMicrovmImageCpuConfigurationsList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.environmentVariables"></a>

```java
public LambdaMicrovmImageEnvironmentVariablesList getEnvironmentVariables();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList">LambdaMicrovmImageEnvironmentVariablesList</a>

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.hooks"></a>

```java
public LambdaMicrovmImageHooksOutputReference getHooks();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference">LambdaMicrovmImageHooksOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageArn`<sup>Required</sup> <a name="imageArn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.imageArn"></a>

```java
public java.lang.String getImageArn();
```

- *Type:* java.lang.String

---

##### `latestActiveImageVersion`<sup>Required</sup> <a name="latestActiveImageVersion" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.latestActiveImageVersion"></a>

```java
public java.lang.String getLatestActiveImageVersion();
```

- *Type:* java.lang.String

---

##### `latestFailedImageVersion`<sup>Required</sup> <a name="latestFailedImageVersion" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.latestFailedImageVersion"></a>

```java
public java.lang.String getLatestFailedImageVersion();
```

- *Type:* java.lang.String

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.logging"></a>

```java
public LambdaMicrovmImageLoggingOutputReference getLogging();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference">LambdaMicrovmImageLoggingOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.resources"></a>

```java
public LambdaMicrovmImageResourcesList getResources();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList">LambdaMicrovmImageResourcesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tags"></a>

```java
public LambdaMicrovmImageTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList">LambdaMicrovmImageTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `additionalOsCapabilitiesInput`<sup>Optional</sup> <a name="additionalOsCapabilitiesInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.additionalOsCapabilitiesInput"></a>

```java
public java.util.List<java.lang.String> getAdditionalOsCapabilitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `baseImageArnInput`<sup>Optional</sup> <a name="baseImageArnInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageArnInput"></a>

```java
public java.lang.String getBaseImageArnInput();
```

- *Type:* java.lang.String

---

##### `baseImageVersionInput`<sup>Optional</sup> <a name="baseImageVersionInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageVersionInput"></a>

```java
public java.lang.String getBaseImageVersionInput();
```

- *Type:* java.lang.String

---

##### `buildRoleArnInput`<sup>Optional</sup> <a name="buildRoleArnInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.buildRoleArnInput"></a>

```java
public java.lang.String getBuildRoleArnInput();
```

- *Type:* java.lang.String

---

##### `codeArtifactInput`<sup>Optional</sup> <a name="codeArtifactInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.codeArtifactInput"></a>

```java
public IResolvable|LambdaMicrovmImageCodeArtifact getCodeArtifactInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a>

---

##### `cpuConfigurationsInput`<sup>Optional</sup> <a name="cpuConfigurationsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cpuConfigurationsInput"></a>

```java
public IResolvable|java.util.List<LambdaMicrovmImageCpuConfigurations> getCpuConfigurationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `egressNetworkConnectorsInput`<sup>Optional</sup> <a name="egressNetworkConnectorsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.egressNetworkConnectorsInput"></a>

```java
public java.util.List<java.lang.String> getEgressNetworkConnectorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.environmentVariablesInput"></a>

```java
public IResolvable|java.util.List<LambdaMicrovmImageEnvironmentVariables> getEnvironmentVariablesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>>

---

##### `hooksInput`<sup>Optional</sup> <a name="hooksInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.hooksInput"></a>

```java
public IResolvable|LambdaMicrovmImageHooks getHooksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a>

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.loggingInput"></a>

```java
public IResolvable|LambdaMicrovmImageLogging getLoggingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.resourcesInput"></a>

```java
public IResolvable|java.util.List<LambdaMicrovmImageResources> getResourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tagsInput"></a>

```java
public IResolvable|java.util.List<LambdaMicrovmImageTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>>

---

##### `additionalOsCapabilities`<sup>Required</sup> <a name="additionalOsCapabilities" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.additionalOsCapabilities"></a>

```java
public java.util.List<java.lang.String> getAdditionalOsCapabilities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `baseImageArn`<sup>Required</sup> <a name="baseImageArn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageArn"></a>

```java
public java.lang.String getBaseImageArn();
```

- *Type:* java.lang.String

---

##### `baseImageVersion`<sup>Required</sup> <a name="baseImageVersion" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageVersion"></a>

```java
public java.lang.String getBaseImageVersion();
```

- *Type:* java.lang.String

---

##### `buildRoleArn`<sup>Required</sup> <a name="buildRoleArn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.buildRoleArn"></a>

```java
public java.lang.String getBuildRoleArn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `egressNetworkConnectors`<sup>Required</sup> <a name="egressNetworkConnectors" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.egressNetworkConnectors"></a>

```java
public java.util.List<java.lang.String> getEgressNetworkConnectors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaMicrovmImageCodeArtifact <a name="LambdaMicrovmImageCodeArtifact" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImageCodeArtifact;

LambdaMicrovmImageCodeArtifact.builder()
    .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact.property.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#uri LambdaMicrovmImage#uri}. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#uri LambdaMicrovmImage#uri}.

---

### LambdaMicrovmImageConfig <a name="LambdaMicrovmImageConfig" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImageConfig;

LambdaMicrovmImageConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .additionalOsCapabilities(java.util.List<java.lang.String>)
    .baseImageArn(java.lang.String)
    .baseImageVersion(java.lang.String)
    .buildRoleArn(java.lang.String)
    .codeArtifact(LambdaMicrovmImageCodeArtifact)
    .cpuConfigurations(IResolvable|java.util.List<LambdaMicrovmImageCpuConfigurations>)
    .description(java.lang.String)
    .egressNetworkConnectors(java.util.List<java.lang.String>)
    .environmentVariables(IResolvable|java.util.List<LambdaMicrovmImageEnvironmentVariables>)
    .hooks(LambdaMicrovmImageHooks)
    .logging(LambdaMicrovmImageLogging)
    .name(java.lang.String)
    .resources(IResolvable|java.util.List<LambdaMicrovmImageResources>)
//  .tags(IResolvable|java.util.List<LambdaMicrovmImageTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.additionalOsCapabilities">additionalOsCapabilities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#additional_os_capabilities LambdaMicrovmImage#additional_os_capabilities}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.baseImageArn">baseImageArn</a></code> | <code>java.lang.String</code> | ARN of the base MicroVM image. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.baseImageVersion">baseImageVersion</a></code> | <code>java.lang.String</code> | Specific version of the base MicroVM image to use. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.buildRoleArn">buildRoleArn</a></code> | <code>java.lang.String</code> | ARN of the IAM build role. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.codeArtifact">codeArtifact</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a></code> | Code artifact for the active MicroVM image. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.cpuConfigurations">cpuConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#cpu_configurations LambdaMicrovmImage#cpu_configurations}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the MicroVM image and its purpose. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.egressNetworkConnectors">egressNetworkConnectors</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#egress_network_connectors LambdaMicrovmImage#egress_network_connectors}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.environmentVariables">environmentVariables</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>></code> | Environment variables to set in the container during the snapshot build. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.hooks">hooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#hooks LambdaMicrovmImage#hooks}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a></code> | Configuration for MicroVM image logging. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.name">name</a></code> | <code>java.lang.String</code> | Unique name for the MicroVM image within the account. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.resources">resources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#resources LambdaMicrovmImage#resources}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>></code> | Key-value pairs to associate with the MicroVM image for organization and management. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `additionalOsCapabilities`<sup>Required</sup> <a name="additionalOsCapabilities" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.additionalOsCapabilities"></a>

```java
public java.util.List<java.lang.String> getAdditionalOsCapabilities();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#additional_os_capabilities LambdaMicrovmImage#additional_os_capabilities}.

---

##### `baseImageArn`<sup>Required</sup> <a name="baseImageArn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.baseImageArn"></a>

```java
public java.lang.String getBaseImageArn();
```

- *Type:* java.lang.String

ARN of the base MicroVM image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#base_image_arn LambdaMicrovmImage#base_image_arn}

---

##### `baseImageVersion`<sup>Required</sup> <a name="baseImageVersion" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.baseImageVersion"></a>

```java
public java.lang.String getBaseImageVersion();
```

- *Type:* java.lang.String

Specific version of the base MicroVM image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#base_image_version LambdaMicrovmImage#base_image_version}

---

##### `buildRoleArn`<sup>Required</sup> <a name="buildRoleArn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.buildRoleArn"></a>

```java
public java.lang.String getBuildRoleArn();
```

- *Type:* java.lang.String

ARN of the IAM build role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#build_role_arn LambdaMicrovmImage#build_role_arn}

---

##### `codeArtifact`<sup>Required</sup> <a name="codeArtifact" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.codeArtifact"></a>

```java
public LambdaMicrovmImageCodeArtifact getCodeArtifact();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a>

Code artifact for the active MicroVM image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#code_artifact LambdaMicrovmImage#code_artifact}

---

##### `cpuConfigurations`<sup>Required</sup> <a name="cpuConfigurations" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.cpuConfigurations"></a>

```java
public IResolvable|java.util.List<LambdaMicrovmImageCpuConfigurations> getCpuConfigurations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#cpu_configurations LambdaMicrovmImage#cpu_configurations}.

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the MicroVM image and its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#description LambdaMicrovmImage#description}

---

##### `egressNetworkConnectors`<sup>Required</sup> <a name="egressNetworkConnectors" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.egressNetworkConnectors"></a>

```java
public java.util.List<java.lang.String> getEgressNetworkConnectors();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#egress_network_connectors LambdaMicrovmImage#egress_network_connectors}.

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.environmentVariables"></a>

```java
public IResolvable|java.util.List<LambdaMicrovmImageEnvironmentVariables> getEnvironmentVariables();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>>

Environment variables to set in the container during the snapshot build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#environment_variables LambdaMicrovmImage#environment_variables}

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.hooks"></a>

```java
public LambdaMicrovmImageHooks getHooks();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#hooks LambdaMicrovmImage#hooks}.

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.logging"></a>

```java
public LambdaMicrovmImageLogging getLogging();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a>

Configuration for MicroVM image logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#logging LambdaMicrovmImage#logging}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Unique name for the MicroVM image within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#name LambdaMicrovmImage#name}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.resources"></a>

```java
public IResolvable|java.util.List<LambdaMicrovmImageResources> getResources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#resources LambdaMicrovmImage#resources}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.tags"></a>

```java
public IResolvable|java.util.List<LambdaMicrovmImageTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>>

Key-value pairs to associate with the MicroVM image for organization and management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#tags LambdaMicrovmImage#tags}

---

### LambdaMicrovmImageCpuConfigurations <a name="LambdaMicrovmImageCpuConfigurations" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImageCpuConfigurations;

LambdaMicrovmImageCpuConfigurations.builder()
    .architecture(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations.property.architecture">architecture</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#architecture LambdaMicrovmImage#architecture}. |

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations.property.architecture"></a>

```java
public java.lang.String getArchitecture();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#architecture LambdaMicrovmImage#architecture}.

---

### LambdaMicrovmImageEnvironmentVariables <a name="LambdaMicrovmImageEnvironmentVariables" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImageEnvironmentVariables;

LambdaMicrovmImageEnvironmentVariables.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#key LambdaMicrovmImage#key}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#value LambdaMicrovmImage#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#key LambdaMicrovmImage#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#value LambdaMicrovmImage#value}.

---

### LambdaMicrovmImageHooks <a name="LambdaMicrovmImageHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImageHooks;

LambdaMicrovmImageHooks.builder()
//  .microvmHooks(LambdaMicrovmImageHooksMicrovmHooks)
//  .microvmImageHooks(LambdaMicrovmImageHooksMicrovmImageHooks)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.microvmHooks">microvmHooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#microvm_hooks LambdaMicrovmImage#microvm_hooks}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.microvmImageHooks">microvmImageHooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#microvm_image_hooks LambdaMicrovmImage#microvm_image_hooks}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#port LambdaMicrovmImage#port}. |

---

##### `microvmHooks`<sup>Optional</sup> <a name="microvmHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.microvmHooks"></a>

```java
public LambdaMicrovmImageHooksMicrovmHooks getMicrovmHooks();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#microvm_hooks LambdaMicrovmImage#microvm_hooks}.

---

##### `microvmImageHooks`<sup>Optional</sup> <a name="microvmImageHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.microvmImageHooks"></a>

```java
public LambdaMicrovmImageHooksMicrovmImageHooks getMicrovmImageHooks();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#microvm_image_hooks LambdaMicrovmImage#microvm_image_hooks}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#port LambdaMicrovmImage#port}.

---

### LambdaMicrovmImageHooksMicrovmHooks <a name="LambdaMicrovmImageHooksMicrovmHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImageHooksMicrovmHooks;

LambdaMicrovmImageHooksMicrovmHooks.builder()
//  .resume(java.lang.String)
//  .resumeTimeoutInSeconds(java.lang.Number)
//  .run(java.lang.String)
//  .runTimeoutInSeconds(java.lang.Number)
//  .suspend(java.lang.String)
//  .suspendTimeoutInSeconds(java.lang.Number)
//  .terminate(java.lang.String)
//  .terminateTimeoutInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.resume">resume</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#resume LambdaMicrovmImage#resume}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.resumeTimeoutInSeconds">resumeTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#resume_timeout_in_seconds LambdaMicrovmImage#resume_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.run">run</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#run LambdaMicrovmImage#run}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.runTimeoutInSeconds">runTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#run_timeout_in_seconds LambdaMicrovmImage#run_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.suspend">suspend</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#suspend LambdaMicrovmImage#suspend}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.suspendTimeoutInSeconds">suspendTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#suspend_timeout_in_seconds LambdaMicrovmImage#suspend_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.terminate">terminate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#terminate LambdaMicrovmImage#terminate}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.terminateTimeoutInSeconds">terminateTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#terminate_timeout_in_seconds LambdaMicrovmImage#terminate_timeout_in_seconds}. |

---

##### `resume`<sup>Optional</sup> <a name="resume" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.resume"></a>

```java
public java.lang.String getResume();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#resume LambdaMicrovmImage#resume}.

---

##### `resumeTimeoutInSeconds`<sup>Optional</sup> <a name="resumeTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.resumeTimeoutInSeconds"></a>

```java
public java.lang.Number getResumeTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#resume_timeout_in_seconds LambdaMicrovmImage#resume_timeout_in_seconds}.

---

##### `run`<sup>Optional</sup> <a name="run" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.run"></a>

```java
public java.lang.String getRun();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#run LambdaMicrovmImage#run}.

---

##### `runTimeoutInSeconds`<sup>Optional</sup> <a name="runTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.runTimeoutInSeconds"></a>

```java
public java.lang.Number getRunTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#run_timeout_in_seconds LambdaMicrovmImage#run_timeout_in_seconds}.

---

##### `suspend`<sup>Optional</sup> <a name="suspend" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.suspend"></a>

```java
public java.lang.String getSuspend();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#suspend LambdaMicrovmImage#suspend}.

---

##### `suspendTimeoutInSeconds`<sup>Optional</sup> <a name="suspendTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.suspendTimeoutInSeconds"></a>

```java
public java.lang.Number getSuspendTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#suspend_timeout_in_seconds LambdaMicrovmImage#suspend_timeout_in_seconds}.

---

##### `terminate`<sup>Optional</sup> <a name="terminate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.terminate"></a>

```java
public java.lang.String getTerminate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#terminate LambdaMicrovmImage#terminate}.

---

##### `terminateTimeoutInSeconds`<sup>Optional</sup> <a name="terminateTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.terminateTimeoutInSeconds"></a>

```java
public java.lang.Number getTerminateTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#terminate_timeout_in_seconds LambdaMicrovmImage#terminate_timeout_in_seconds}.

---

### LambdaMicrovmImageHooksMicrovmImageHooks <a name="LambdaMicrovmImageHooksMicrovmImageHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImageHooksMicrovmImageHooks;

LambdaMicrovmImageHooksMicrovmImageHooks.builder()
//  .ready(java.lang.String)
//  .readyTimeoutInSeconds(java.lang.Number)
//  .validate(java.lang.String)
//  .validateTimeoutInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.ready">ready</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#ready LambdaMicrovmImage#ready}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.readyTimeoutInSeconds">readyTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#ready_timeout_in_seconds LambdaMicrovmImage#ready_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.validate">validate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#validate LambdaMicrovmImage#validate}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.validateTimeoutInSeconds">validateTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#validate_timeout_in_seconds LambdaMicrovmImage#validate_timeout_in_seconds}. |

---

##### `ready`<sup>Optional</sup> <a name="ready" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.ready"></a>

```java
public java.lang.String getReady();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#ready LambdaMicrovmImage#ready}.

---

##### `readyTimeoutInSeconds`<sup>Optional</sup> <a name="readyTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.readyTimeoutInSeconds"></a>

```java
public java.lang.Number getReadyTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#ready_timeout_in_seconds LambdaMicrovmImage#ready_timeout_in_seconds}.

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.validate"></a>

```java
public java.lang.String getValidate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#validate LambdaMicrovmImage#validate}.

---

##### `validateTimeoutInSeconds`<sup>Optional</sup> <a name="validateTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.validateTimeoutInSeconds"></a>

```java
public java.lang.Number getValidateTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#validate_timeout_in_seconds LambdaMicrovmImage#validate_timeout_in_seconds}.

---

### LambdaMicrovmImageLogging <a name="LambdaMicrovmImageLogging" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImageLogging;

LambdaMicrovmImageLogging.builder()
//  .cloudwatch(LambdaMicrovmImageLoggingCloudwatch)
//  .disabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging.property.cloudwatch">cloudwatch</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#cloudwatch LambdaMicrovmImage#cloudwatch}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#disabled LambdaMicrovmImage#disabled}. |

---

##### `cloudwatch`<sup>Optional</sup> <a name="cloudwatch" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging.property.cloudwatch"></a>

```java
public LambdaMicrovmImageLoggingCloudwatch getCloudwatch();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#cloudwatch LambdaMicrovmImage#cloudwatch}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#disabled LambdaMicrovmImage#disabled}.

---

### LambdaMicrovmImageLoggingCloudwatch <a name="LambdaMicrovmImageLoggingCloudwatch" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImageLoggingCloudwatch;

LambdaMicrovmImageLoggingCloudwatch.builder()
//  .logGroup(java.lang.String)
//  .logStream(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#log_group LambdaMicrovmImage#log_group}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch.property.logStream">logStream</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#log_stream LambdaMicrovmImage#log_stream}. |

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#log_group LambdaMicrovmImage#log_group}.

---

##### `logStream`<sup>Optional</sup> <a name="logStream" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch.property.logStream"></a>

```java
public java.lang.String getLogStream();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#log_stream LambdaMicrovmImage#log_stream}.

---

### LambdaMicrovmImageResources <a name="LambdaMicrovmImageResources" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImageResources;

LambdaMicrovmImageResources.builder()
    .minimumMemoryInMiB(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources.property.minimumMemoryInMiB">minimumMemoryInMiB</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#minimum_memory_in_mi_b LambdaMicrovmImage#minimum_memory_in_mi_b}. |

---

##### `minimumMemoryInMiB`<sup>Required</sup> <a name="minimumMemoryInMiB" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources.property.minimumMemoryInMiB"></a>

```java
public java.lang.Number getMinimumMemoryInMiB();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#minimum_memory_in_mi_b LambdaMicrovmImage#minimum_memory_in_mi_b}.

---

### LambdaMicrovmImageTags <a name="LambdaMicrovmImageTags" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImageTags;

LambdaMicrovmImageTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#key LambdaMicrovmImage#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_microvm_image#value LambdaMicrovmImage#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaMicrovmImageCodeArtifactOutputReference <a name="LambdaMicrovmImageCodeArtifactOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImageCodeArtifactOutputReference;

new LambdaMicrovmImageCodeArtifactOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaMicrovmImageCodeArtifact getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a>

---


### LambdaMicrovmImageCpuConfigurationsList <a name="LambdaMicrovmImageCpuConfigurationsList" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImageCpuConfigurationsList;

new LambdaMicrovmImageCpuConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.get"></a>

```java
public LambdaMicrovmImageCpuConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LambdaMicrovmImageCpuConfigurations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>>

---


### LambdaMicrovmImageCpuConfigurationsOutputReference <a name="LambdaMicrovmImageCpuConfigurationsOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImageCpuConfigurationsOutputReference;

new LambdaMicrovmImageCpuConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.architectureInput">architectureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.architecture">architecture</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `architectureInput`<sup>Optional</sup> <a name="architectureInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.architectureInput"></a>

```java
public java.lang.String getArchitectureInput();
```

- *Type:* java.lang.String

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.architecture"></a>

```java
public java.lang.String getArchitecture();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaMicrovmImageCpuConfigurations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>

---


### LambdaMicrovmImageEnvironmentVariablesList <a name="LambdaMicrovmImageEnvironmentVariablesList" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImageEnvironmentVariablesList;

new LambdaMicrovmImageEnvironmentVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.get"></a>

```java
public LambdaMicrovmImageEnvironmentVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LambdaMicrovmImageEnvironmentVariables> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>>

---


### LambdaMicrovmImageEnvironmentVariablesOutputReference <a name="LambdaMicrovmImageEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImageEnvironmentVariablesOutputReference;

new LambdaMicrovmImageEnvironmentVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaMicrovmImageEnvironmentVariables getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>

---


### LambdaMicrovmImageHooksMicrovmHooksOutputReference <a name="LambdaMicrovmImageHooksMicrovmHooksOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImageHooksMicrovmHooksOutputReference;

new LambdaMicrovmImageHooksMicrovmHooksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetResume">resetResume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetResumeTimeoutInSeconds">resetResumeTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetRun">resetRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetRunTimeoutInSeconds">resetRunTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetSuspend">resetSuspend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetSuspendTimeoutInSeconds">resetSuspendTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetTerminate">resetTerminate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetTerminateTimeoutInSeconds">resetTerminateTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResume` <a name="resetResume" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetResume"></a>

```java
public void resetResume()
```

##### `resetResumeTimeoutInSeconds` <a name="resetResumeTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetResumeTimeoutInSeconds"></a>

```java
public void resetResumeTimeoutInSeconds()
```

##### `resetRun` <a name="resetRun" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetRun"></a>

```java
public void resetRun()
```

##### `resetRunTimeoutInSeconds` <a name="resetRunTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetRunTimeoutInSeconds"></a>

```java
public void resetRunTimeoutInSeconds()
```

##### `resetSuspend` <a name="resetSuspend" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetSuspend"></a>

```java
public void resetSuspend()
```

##### `resetSuspendTimeoutInSeconds` <a name="resetSuspendTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetSuspendTimeoutInSeconds"></a>

```java
public void resetSuspendTimeoutInSeconds()
```

##### `resetTerminate` <a name="resetTerminate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetTerminate"></a>

```java
public void resetTerminate()
```

##### `resetTerminateTimeoutInSeconds` <a name="resetTerminateTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetTerminateTimeoutInSeconds"></a>

```java
public void resetTerminateTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeInput">resumeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeTimeoutInSecondsInput">resumeTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runInput">runInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runTimeoutInSecondsInput">runTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendInput">suspendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendTimeoutInSecondsInput">suspendTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateInput">terminateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateTimeoutInSecondsInput">terminateTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resume">resume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeTimeoutInSeconds">resumeTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.run">run</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runTimeoutInSeconds">runTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspend">suspend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendTimeoutInSeconds">suspendTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminate">terminate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateTimeoutInSeconds">terminateTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resumeInput`<sup>Optional</sup> <a name="resumeInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeInput"></a>

```java
public java.lang.String getResumeInput();
```

- *Type:* java.lang.String

---

##### `resumeTimeoutInSecondsInput`<sup>Optional</sup> <a name="resumeTimeoutInSecondsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeTimeoutInSecondsInput"></a>

```java
public java.lang.Number getResumeTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `runInput`<sup>Optional</sup> <a name="runInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runInput"></a>

```java
public java.lang.String getRunInput();
```

- *Type:* java.lang.String

---

##### `runTimeoutInSecondsInput`<sup>Optional</sup> <a name="runTimeoutInSecondsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runTimeoutInSecondsInput"></a>

```java
public java.lang.Number getRunTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `suspendInput`<sup>Optional</sup> <a name="suspendInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendInput"></a>

```java
public java.lang.String getSuspendInput();
```

- *Type:* java.lang.String

---

##### `suspendTimeoutInSecondsInput`<sup>Optional</sup> <a name="suspendTimeoutInSecondsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendTimeoutInSecondsInput"></a>

```java
public java.lang.Number getSuspendTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `terminateInput`<sup>Optional</sup> <a name="terminateInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateInput"></a>

```java
public java.lang.String getTerminateInput();
```

- *Type:* java.lang.String

---

##### `terminateTimeoutInSecondsInput`<sup>Optional</sup> <a name="terminateTimeoutInSecondsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateTimeoutInSecondsInput"></a>

```java
public java.lang.Number getTerminateTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `resume`<sup>Required</sup> <a name="resume" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resume"></a>

```java
public java.lang.String getResume();
```

- *Type:* java.lang.String

---

##### `resumeTimeoutInSeconds`<sup>Required</sup> <a name="resumeTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeTimeoutInSeconds"></a>

```java
public java.lang.Number getResumeTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.run"></a>

```java
public java.lang.String getRun();
```

- *Type:* java.lang.String

---

##### `runTimeoutInSeconds`<sup>Required</sup> <a name="runTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runTimeoutInSeconds"></a>

```java
public java.lang.Number getRunTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `suspend`<sup>Required</sup> <a name="suspend" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspend"></a>

```java
public java.lang.String getSuspend();
```

- *Type:* java.lang.String

---

##### `suspendTimeoutInSeconds`<sup>Required</sup> <a name="suspendTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendTimeoutInSeconds"></a>

```java
public java.lang.Number getSuspendTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `terminate`<sup>Required</sup> <a name="terminate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminate"></a>

```java
public java.lang.String getTerminate();
```

- *Type:* java.lang.String

---

##### `terminateTimeoutInSeconds`<sup>Required</sup> <a name="terminateTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateTimeoutInSeconds"></a>

```java
public java.lang.Number getTerminateTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaMicrovmImageHooksMicrovmHooks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a>

---


### LambdaMicrovmImageHooksMicrovmImageHooksOutputReference <a name="LambdaMicrovmImageHooksMicrovmImageHooksOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference;

new LambdaMicrovmImageHooksMicrovmImageHooksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetReady">resetReady</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetReadyTimeoutInSeconds">resetReadyTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetValidate">resetValidate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetValidateTimeoutInSeconds">resetValidateTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReady` <a name="resetReady" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetReady"></a>

```java
public void resetReady()
```

##### `resetReadyTimeoutInSeconds` <a name="resetReadyTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetReadyTimeoutInSeconds"></a>

```java
public void resetReadyTimeoutInSeconds()
```

##### `resetValidate` <a name="resetValidate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetValidate"></a>

```java
public void resetValidate()
```

##### `resetValidateTimeoutInSeconds` <a name="resetValidateTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetValidateTimeoutInSeconds"></a>

```java
public void resetValidateTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyInput">readyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSecondsInput">readyTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateInput">validateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSecondsInput">validateTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.ready">ready</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSeconds">readyTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validate">validate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSeconds">validateTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readyInput`<sup>Optional</sup> <a name="readyInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyInput"></a>

```java
public java.lang.String getReadyInput();
```

- *Type:* java.lang.String

---

##### `readyTimeoutInSecondsInput`<sup>Optional</sup> <a name="readyTimeoutInSecondsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSecondsInput"></a>

```java
public java.lang.Number getReadyTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `validateInput`<sup>Optional</sup> <a name="validateInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateInput"></a>

```java
public java.lang.String getValidateInput();
```

- *Type:* java.lang.String

---

##### `validateTimeoutInSecondsInput`<sup>Optional</sup> <a name="validateTimeoutInSecondsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSecondsInput"></a>

```java
public java.lang.Number getValidateTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `ready`<sup>Required</sup> <a name="ready" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.ready"></a>

```java
public java.lang.String getReady();
```

- *Type:* java.lang.String

---

##### `readyTimeoutInSeconds`<sup>Required</sup> <a name="readyTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSeconds"></a>

```java
public java.lang.Number getReadyTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validate"></a>

```java
public java.lang.String getValidate();
```

- *Type:* java.lang.String

---

##### `validateTimeoutInSeconds`<sup>Required</sup> <a name="validateTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSeconds"></a>

```java
public java.lang.Number getValidateTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaMicrovmImageHooksMicrovmImageHooks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a>

---


### LambdaMicrovmImageHooksOutputReference <a name="LambdaMicrovmImageHooksOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImageHooksOutputReference;

new LambdaMicrovmImageHooksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmHooks">putMicrovmHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmImageHooks">putMicrovmImageHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetMicrovmHooks">resetMicrovmHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetMicrovmImageHooks">resetMicrovmImageHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMicrovmHooks` <a name="putMicrovmHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmHooks"></a>

```java
public void putMicrovmHooks(LambdaMicrovmImageHooksMicrovmHooks value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmHooks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a>

---

##### `putMicrovmImageHooks` <a name="putMicrovmImageHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmImageHooks"></a>

```java
public void putMicrovmImageHooks(LambdaMicrovmImageHooksMicrovmImageHooks value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmImageHooks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a>

---

##### `resetMicrovmHooks` <a name="resetMicrovmHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetMicrovmHooks"></a>

```java
public void resetMicrovmHooks()
```

##### `resetMicrovmImageHooks` <a name="resetMicrovmImageHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetMicrovmImageHooks"></a>

```java
public void resetMicrovmImageHooks()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmHooks">microvmHooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference">LambdaMicrovmImageHooksMicrovmHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmImageHooks">microvmImageHooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference">LambdaMicrovmImageHooksMicrovmImageHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmHooksInput">microvmHooksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmImageHooksInput">microvmImageHooksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `microvmHooks`<sup>Required</sup> <a name="microvmHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmHooks"></a>

```java
public LambdaMicrovmImageHooksMicrovmHooksOutputReference getMicrovmHooks();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference">LambdaMicrovmImageHooksMicrovmHooksOutputReference</a>

---

##### `microvmImageHooks`<sup>Required</sup> <a name="microvmImageHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmImageHooks"></a>

```java
public LambdaMicrovmImageHooksMicrovmImageHooksOutputReference getMicrovmImageHooks();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference">LambdaMicrovmImageHooksMicrovmImageHooksOutputReference</a>

---

##### `microvmHooksInput`<sup>Optional</sup> <a name="microvmHooksInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmHooksInput"></a>

```java
public IResolvable|LambdaMicrovmImageHooksMicrovmHooks getMicrovmHooksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a>

---

##### `microvmImageHooksInput`<sup>Optional</sup> <a name="microvmImageHooksInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmImageHooksInput"></a>

```java
public IResolvable|LambdaMicrovmImageHooksMicrovmImageHooks getMicrovmImageHooksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaMicrovmImageHooks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a>

---


### LambdaMicrovmImageLoggingCloudwatchOutputReference <a name="LambdaMicrovmImageLoggingCloudwatchOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImageLoggingCloudwatchOutputReference;

new LambdaMicrovmImageLoggingCloudwatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resetLogStream">resetLogStream</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resetLogGroup"></a>

```java
public void resetLogGroup()
```

##### `resetLogStream` <a name="resetLogStream" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resetLogStream"></a>

```java
public void resetLogStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logStreamInput">logStreamInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logStream">logStream</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logGroupInput"></a>

```java
public java.lang.String getLogGroupInput();
```

- *Type:* java.lang.String

---

##### `logStreamInput`<sup>Optional</sup> <a name="logStreamInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logStreamInput"></a>

```java
public java.lang.String getLogStreamInput();
```

- *Type:* java.lang.String

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

---

##### `logStream`<sup>Required</sup> <a name="logStream" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logStream"></a>

```java
public java.lang.String getLogStream();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaMicrovmImageLoggingCloudwatch getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a>

---


### LambdaMicrovmImageLoggingOutputReference <a name="LambdaMicrovmImageLoggingOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImageLoggingOutputReference;

new LambdaMicrovmImageLoggingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.putCloudwatch">putCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resetCloudwatch">resetCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatch` <a name="putCloudwatch" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.putCloudwatch"></a>

```java
public void putCloudwatch(LambdaMicrovmImageLoggingCloudwatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.putCloudwatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a>

---

##### `resetCloudwatch` <a name="resetCloudwatch" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resetCloudwatch"></a>

```java
public void resetCloudwatch()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.cloudwatch">cloudwatch</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference">LambdaMicrovmImageLoggingCloudwatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.cloudwatchInput">cloudwatchInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatch`<sup>Required</sup> <a name="cloudwatch" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.cloudwatch"></a>

```java
public LambdaMicrovmImageLoggingCloudwatchOutputReference getCloudwatch();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference">LambdaMicrovmImageLoggingCloudwatchOutputReference</a>

---

##### `cloudwatchInput`<sup>Optional</sup> <a name="cloudwatchInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.cloudwatchInput"></a>

```java
public IResolvable|LambdaMicrovmImageLoggingCloudwatch getCloudwatchInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaMicrovmImageLogging getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a>

---


### LambdaMicrovmImageResourcesList <a name="LambdaMicrovmImageResourcesList" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImageResourcesList;

new LambdaMicrovmImageResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.get"></a>

```java
public LambdaMicrovmImageResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LambdaMicrovmImageResources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>>

---


### LambdaMicrovmImageResourcesOutputReference <a name="LambdaMicrovmImageResourcesOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImageResourcesOutputReference;

new LambdaMicrovmImageResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.minimumMemoryInMiBInput">minimumMemoryInMiBInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.minimumMemoryInMiB">minimumMemoryInMiB</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `minimumMemoryInMiBInput`<sup>Optional</sup> <a name="minimumMemoryInMiBInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.minimumMemoryInMiBInput"></a>

```java
public java.lang.Number getMinimumMemoryInMiBInput();
```

- *Type:* java.lang.Number

---

##### `minimumMemoryInMiB`<sup>Required</sup> <a name="minimumMemoryInMiB" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.minimumMemoryInMiB"></a>

```java
public java.lang.Number getMinimumMemoryInMiB();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaMicrovmImageResources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>

---


### LambdaMicrovmImageTagsList <a name="LambdaMicrovmImageTagsList" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImageTagsList;

new LambdaMicrovmImageTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.get"></a>

```java
public LambdaMicrovmImageTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LambdaMicrovmImageTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>>

---


### LambdaMicrovmImageTagsOutputReference <a name="LambdaMicrovmImageTagsOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_microvm_image.LambdaMicrovmImageTagsOutputReference;

new LambdaMicrovmImageTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaMicrovmImageTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>

---



