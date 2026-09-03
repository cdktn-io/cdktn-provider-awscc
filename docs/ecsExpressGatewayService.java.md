# `ecsExpressGatewayService` Submodule <a name="`ecsExpressGatewayService` Submodule" id="@cdktn/provider-awscc.ecsExpressGatewayService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsExpressGatewayService <a name="EcsExpressGatewayService" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service awscc_ecs_express_gateway_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayService;

EcsExpressGatewayService.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .infrastructureRoleArn(java.lang.String)
//  .cluster(java.lang.String)
//  .cpu(java.lang.String)
//  .executionRoleArn(java.lang.String)
//  .healthCheckPath(java.lang.String)
//  .memory(java.lang.String)
//  .networkConfiguration(EcsExpressGatewayServiceNetworkConfiguration)
//  .primaryContainer(EcsExpressGatewayServicePrimaryContainer)
//  .scalingTarget(EcsExpressGatewayServiceScalingTarget)
//  .serviceName(java.lang.String)
//  .tags(IResolvable|java.util.List<EcsExpressGatewayServiceTags>)
//  .taskDefinitionArn(java.lang.String)
//  .taskRoleArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.infrastructureRoleArn">infrastructureRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#infrastructure_role_arn EcsExpressGatewayService#infrastructure_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.cluster">cluster</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#cluster EcsExpressGatewayService#cluster}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.cpu">cpu</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#cpu EcsExpressGatewayService#cpu}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#execution_role_arn EcsExpressGatewayService#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.healthCheckPath">healthCheckPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#health_check_path EcsExpressGatewayService#health_check_path}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.memory">memory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#memory EcsExpressGatewayService#memory}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#network_configuration EcsExpressGatewayService#network_configuration}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.primaryContainer">primaryContainer</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#primary_container EcsExpressGatewayService#primary_container}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.scalingTarget">scalingTarget</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#scaling_target EcsExpressGatewayService#scaling_target}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#service_name EcsExpressGatewayService#service_name}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags">EcsExpressGatewayServiceTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#tags EcsExpressGatewayService#tags}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.taskDefinitionArn">taskDefinitionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#task_definition_arn EcsExpressGatewayService#task_definition_arn}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.taskRoleArn">taskRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#task_role_arn EcsExpressGatewayService#task_role_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `infrastructureRoleArn`<sup>Required</sup> <a name="infrastructureRoleArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.infrastructureRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#infrastructure_role_arn EcsExpressGatewayService#infrastructure_role_arn}.

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.cluster"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#cluster EcsExpressGatewayService#cluster}.

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.cpu"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#cpu EcsExpressGatewayService#cpu}.

---

##### `executionRoleArn`<sup>Optional</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.executionRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#execution_role_arn EcsExpressGatewayService#execution_role_arn}.

---

##### `healthCheckPath`<sup>Optional</sup> <a name="healthCheckPath" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.healthCheckPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#health_check_path EcsExpressGatewayService#health_check_path}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.memory"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#memory EcsExpressGatewayService#memory}.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#network_configuration EcsExpressGatewayService#network_configuration}.

---

##### `primaryContainer`<sup>Optional</sup> <a name="primaryContainer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.primaryContainer"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#primary_container EcsExpressGatewayService#primary_container}.

---

##### `scalingTarget`<sup>Optional</sup> <a name="scalingTarget" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.scalingTarget"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#scaling_target EcsExpressGatewayService#scaling_target}.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.serviceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#service_name EcsExpressGatewayService#service_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags">EcsExpressGatewayServiceTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#tags EcsExpressGatewayService#tags}.

---

##### `taskDefinitionArn`<sup>Optional</sup> <a name="taskDefinitionArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.taskDefinitionArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#task_definition_arn EcsExpressGatewayService#task_definition_arn}.

---

##### `taskRoleArn`<sup>Optional</sup> <a name="taskRoleArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.taskRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#task_role_arn EcsExpressGatewayService#task_role_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.putPrimaryContainer">putPrimaryContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.putScalingTarget">putScalingTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetCluster">resetCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetExecutionRoleArn">resetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetHealthCheckPath">resetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetPrimaryContainer">resetPrimaryContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetScalingTarget">resetScalingTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetTaskDefinitionArn">resetTaskDefinitionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetTaskRoleArn">resetTaskRoleArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.putNetworkConfiguration"></a>

```java
public void putNetworkConfiguration(EcsExpressGatewayServiceNetworkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a>

---

##### `putPrimaryContainer` <a name="putPrimaryContainer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.putPrimaryContainer"></a>

```java
public void putPrimaryContainer(EcsExpressGatewayServicePrimaryContainer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.putPrimaryContainer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a>

---

##### `putScalingTarget` <a name="putScalingTarget" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.putScalingTarget"></a>

```java
public void putScalingTarget(EcsExpressGatewayServiceScalingTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.putScalingTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<EcsExpressGatewayServiceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags">EcsExpressGatewayServiceTags</a>>

---

##### `resetCluster` <a name="resetCluster" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetCluster"></a>

```java
public void resetCluster()
```

##### `resetCpu` <a name="resetCpu" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetCpu"></a>

```java
public void resetCpu()
```

##### `resetExecutionRoleArn` <a name="resetExecutionRoleArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetExecutionRoleArn"></a>

```java
public void resetExecutionRoleArn()
```

##### `resetHealthCheckPath` <a name="resetHealthCheckPath" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetHealthCheckPath"></a>

```java
public void resetHealthCheckPath()
```

##### `resetMemory` <a name="resetMemory" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetMemory"></a>

```java
public void resetMemory()
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetNetworkConfiguration"></a>

```java
public void resetNetworkConfiguration()
```

##### `resetPrimaryContainer` <a name="resetPrimaryContainer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetPrimaryContainer"></a>

```java
public void resetPrimaryContainer()
```

##### `resetScalingTarget` <a name="resetScalingTarget" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetScalingTarget"></a>

```java
public void resetScalingTarget()
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetServiceName"></a>

```java
public void resetServiceName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetTags"></a>

```java
public void resetTags()
```

##### `resetTaskDefinitionArn` <a name="resetTaskDefinitionArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetTaskDefinitionArn"></a>

```java
public void resetTaskDefinitionArn()
```

##### `resetTaskRoleArn` <a name="resetTaskRoleArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetTaskRoleArn"></a>

```java
public void resetTaskRoleArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EcsExpressGatewayService resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayService;

EcsExpressGatewayService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayService;

EcsExpressGatewayService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayService;

EcsExpressGatewayService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayService;

EcsExpressGatewayService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EcsExpressGatewayService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EcsExpressGatewayService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EcsExpressGatewayService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EcsExpressGatewayService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EcsExpressGatewayService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.activeConfigurations">activeConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList">EcsExpressGatewayServiceActiveConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.ecsManagedResourceArns">ecsManagedResourceArns</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference">EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference">EcsExpressGatewayServiceNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.primaryContainer">primaryContainer</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference">EcsExpressGatewayServicePrimaryContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.scalingTarget">scalingTarget</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference">EcsExpressGatewayServiceScalingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceArn">serviceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.status">status</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference">EcsExpressGatewayServiceStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList">EcsExpressGatewayServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.cpuInput">cpuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.healthCheckPathInput">healthCheckPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.infrastructureRoleArnInput">infrastructureRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.memoryInput">memoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.primaryContainerInput">primaryContainerInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.scalingTargetInput">scalingTargetInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags">EcsExpressGatewayServiceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.taskDefinitionArnInput">taskDefinitionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.taskRoleArnInput">taskRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.cpu">cpu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.healthCheckPath">healthCheckPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.infrastructureRoleArn">infrastructureRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.memory">memory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.taskDefinitionArn">taskDefinitionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.taskRoleArn">taskRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `activeConfigurations`<sup>Required</sup> <a name="activeConfigurations" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.activeConfigurations"></a>

```java
public EcsExpressGatewayServiceActiveConfigurationsList getActiveConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList">EcsExpressGatewayServiceActiveConfigurationsList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `ecsManagedResourceArns`<sup>Required</sup> <a name="ecsManagedResourceArns" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.ecsManagedResourceArns"></a>

```java
public EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference getEcsManagedResourceArns();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference">EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.networkConfiguration"></a>

```java
public EcsExpressGatewayServiceNetworkConfigurationOutputReference getNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference">EcsExpressGatewayServiceNetworkConfigurationOutputReference</a>

---

##### `primaryContainer`<sup>Required</sup> <a name="primaryContainer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.primaryContainer"></a>

```java
public EcsExpressGatewayServicePrimaryContainerOutputReference getPrimaryContainer();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference">EcsExpressGatewayServicePrimaryContainerOutputReference</a>

---

##### `scalingTarget`<sup>Required</sup> <a name="scalingTarget" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.scalingTarget"></a>

```java
public EcsExpressGatewayServiceScalingTargetOutputReference getScalingTarget();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference">EcsExpressGatewayServiceScalingTargetOutputReference</a>

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceArn"></a>

```java
public java.lang.String getServiceArn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.status"></a>

```java
public EcsExpressGatewayServiceStatusOutputReference getStatus();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference">EcsExpressGatewayServiceStatusOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.tags"></a>

```java
public EcsExpressGatewayServiceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList">EcsExpressGatewayServiceTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.cpuInput"></a>

```java
public java.lang.String getCpuInput();
```

- *Type:* java.lang.String

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.executionRoleArnInput"></a>

```java
public java.lang.String getExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `healthCheckPathInput`<sup>Optional</sup> <a name="healthCheckPathInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.healthCheckPathInput"></a>

```java
public java.lang.String getHealthCheckPathInput();
```

- *Type:* java.lang.String

---

##### `infrastructureRoleArnInput`<sup>Optional</sup> <a name="infrastructureRoleArnInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.infrastructureRoleArnInput"></a>

```java
public java.lang.String getInfrastructureRoleArnInput();
```

- *Type:* java.lang.String

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.memoryInput"></a>

```java
public java.lang.String getMemoryInput();
```

- *Type:* java.lang.String

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.networkConfigurationInput"></a>

```java
public IResolvable|EcsExpressGatewayServiceNetworkConfiguration getNetworkConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a>

---

##### `primaryContainerInput`<sup>Optional</sup> <a name="primaryContainerInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.primaryContainerInput"></a>

```java
public IResolvable|EcsExpressGatewayServicePrimaryContainer getPrimaryContainerInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a>

---

##### `scalingTargetInput`<sup>Optional</sup> <a name="scalingTargetInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.scalingTargetInput"></a>

```java
public IResolvable|EcsExpressGatewayServiceScalingTarget getScalingTargetInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.tagsInput"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServiceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags">EcsExpressGatewayServiceTags</a>>

---

##### `taskDefinitionArnInput`<sup>Optional</sup> <a name="taskDefinitionArnInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.taskDefinitionArnInput"></a>

```java
public java.lang.String getTaskDefinitionArnInput();
```

- *Type:* java.lang.String

---

##### `taskRoleArnInput`<sup>Optional</sup> <a name="taskRoleArnInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.taskRoleArnInput"></a>

```java
public java.lang.String getTaskRoleArnInput();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.cpu"></a>

```java
public java.lang.String getCpu();
```

- *Type:* java.lang.String

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `healthCheckPath`<sup>Required</sup> <a name="healthCheckPath" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.healthCheckPath"></a>

```java
public java.lang.String getHealthCheckPath();
```

- *Type:* java.lang.String

---

##### `infrastructureRoleArn`<sup>Required</sup> <a name="infrastructureRoleArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.infrastructureRoleArn"></a>

```java
public java.lang.String getInfrastructureRoleArn();
```

- *Type:* java.lang.String

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `taskDefinitionArn`<sup>Required</sup> <a name="taskDefinitionArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.taskDefinitionArn"></a>

```java
public java.lang.String getTaskDefinitionArn();
```

- *Type:* java.lang.String

---

##### `taskRoleArn`<sup>Required</sup> <a name="taskRoleArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.taskRoleArn"></a>

```java
public java.lang.String getTaskRoleArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EcsExpressGatewayServiceActiveConfigurations <a name="EcsExpressGatewayServiceActiveConfigurations" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceActiveConfigurations;

EcsExpressGatewayServiceActiveConfigurations.builder()
    .build();
```


### EcsExpressGatewayServiceActiveConfigurationsIngressPaths <a name="EcsExpressGatewayServiceActiveConfigurationsIngressPaths" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPaths.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceActiveConfigurationsIngressPaths;

EcsExpressGatewayServiceActiveConfigurationsIngressPaths.builder()
    .build();
```


### EcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration <a name="EcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration;

EcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration.builder()
    .build();
```


### EcsExpressGatewayServiceActiveConfigurationsPrimaryContainer <a name="EcsExpressGatewayServiceActiveConfigurationsPrimaryContainer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainer.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainer;

EcsExpressGatewayServiceActiveConfigurationsPrimaryContainer.builder()
    .build();
```


### EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration <a name="EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration;

EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration.builder()
    .build();
```


### EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment <a name="EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment;

EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment.builder()
    .build();
```


### EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials <a name="EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials;

EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials.builder()
    .build();
```


### EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets <a name="EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets;

EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets.builder()
    .build();
```


### EcsExpressGatewayServiceActiveConfigurationsScalingTarget <a name="EcsExpressGatewayServiceActiveConfigurationsScalingTarget" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTarget.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceActiveConfigurationsScalingTarget;

EcsExpressGatewayServiceActiveConfigurationsScalingTarget.builder()
    .build();
```


### EcsExpressGatewayServiceConfig <a name="EcsExpressGatewayServiceConfig" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceConfig;

EcsExpressGatewayServiceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .infrastructureRoleArn(java.lang.String)
//  .cluster(java.lang.String)
//  .cpu(java.lang.String)
//  .executionRoleArn(java.lang.String)
//  .healthCheckPath(java.lang.String)
//  .memory(java.lang.String)
//  .networkConfiguration(EcsExpressGatewayServiceNetworkConfiguration)
//  .primaryContainer(EcsExpressGatewayServicePrimaryContainer)
//  .scalingTarget(EcsExpressGatewayServiceScalingTarget)
//  .serviceName(java.lang.String)
//  .tags(IResolvable|java.util.List<EcsExpressGatewayServiceTags>)
//  .taskDefinitionArn(java.lang.String)
//  .taskRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.infrastructureRoleArn">infrastructureRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#infrastructure_role_arn EcsExpressGatewayService#infrastructure_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.cluster">cluster</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#cluster EcsExpressGatewayService#cluster}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.cpu">cpu</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#cpu EcsExpressGatewayService#cpu}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#execution_role_arn EcsExpressGatewayService#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.healthCheckPath">healthCheckPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#health_check_path EcsExpressGatewayService#health_check_path}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.memory">memory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#memory EcsExpressGatewayService#memory}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#network_configuration EcsExpressGatewayService#network_configuration}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.primaryContainer">primaryContainer</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#primary_container EcsExpressGatewayService#primary_container}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.scalingTarget">scalingTarget</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#scaling_target EcsExpressGatewayService#scaling_target}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#service_name EcsExpressGatewayService#service_name}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags">EcsExpressGatewayServiceTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#tags EcsExpressGatewayService#tags}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.taskDefinitionArn">taskDefinitionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#task_definition_arn EcsExpressGatewayService#task_definition_arn}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.taskRoleArn">taskRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#task_role_arn EcsExpressGatewayService#task_role_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `infrastructureRoleArn`<sup>Required</sup> <a name="infrastructureRoleArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.infrastructureRoleArn"></a>

```java
public java.lang.String getInfrastructureRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#infrastructure_role_arn EcsExpressGatewayService#infrastructure_role_arn}.

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#cluster EcsExpressGatewayService#cluster}.

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.cpu"></a>

```java
public java.lang.String getCpu();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#cpu EcsExpressGatewayService#cpu}.

---

##### `executionRoleArn`<sup>Optional</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#execution_role_arn EcsExpressGatewayService#execution_role_arn}.

---

##### `healthCheckPath`<sup>Optional</sup> <a name="healthCheckPath" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.healthCheckPath"></a>

```java
public java.lang.String getHealthCheckPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#health_check_path EcsExpressGatewayService#health_check_path}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#memory EcsExpressGatewayService#memory}.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.networkConfiguration"></a>

```java
public EcsExpressGatewayServiceNetworkConfiguration getNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#network_configuration EcsExpressGatewayService#network_configuration}.

---

##### `primaryContainer`<sup>Optional</sup> <a name="primaryContainer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.primaryContainer"></a>

```java
public EcsExpressGatewayServicePrimaryContainer getPrimaryContainer();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#primary_container EcsExpressGatewayService#primary_container}.

---

##### `scalingTarget`<sup>Optional</sup> <a name="scalingTarget" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.scalingTarget"></a>

```java
public EcsExpressGatewayServiceScalingTarget getScalingTarget();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#scaling_target EcsExpressGatewayService#scaling_target}.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#service_name EcsExpressGatewayService#service_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServiceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags">EcsExpressGatewayServiceTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#tags EcsExpressGatewayService#tags}.

---

##### `taskDefinitionArn`<sup>Optional</sup> <a name="taskDefinitionArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.taskDefinitionArn"></a>

```java
public java.lang.String getTaskDefinitionArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#task_definition_arn EcsExpressGatewayService#task_definition_arn}.

---

##### `taskRoleArn`<sup>Optional</sup> <a name="taskRoleArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.taskRoleArn"></a>

```java
public java.lang.String getTaskRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#task_role_arn EcsExpressGatewayService#task_role_arn}.

---

### EcsExpressGatewayServiceEcsManagedResourceArns <a name="EcsExpressGatewayServiceEcsManagedResourceArns" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArns.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceEcsManagedResourceArns;

EcsExpressGatewayServiceEcsManagedResourceArns.builder()
    .build();
```


### EcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling <a name="EcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling;

EcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling.builder()
    .build();
```


### EcsExpressGatewayServiceEcsManagedResourceArnsIngressPath <a name="EcsExpressGatewayServiceEcsManagedResourceArnsIngressPath" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPath"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPath.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPath;

EcsExpressGatewayServiceEcsManagedResourceArnsIngressPath.builder()
    .build();
```


### EcsExpressGatewayServiceNetworkConfiguration <a name="EcsExpressGatewayServiceNetworkConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceNetworkConfiguration;

EcsExpressGatewayServiceNetworkConfiguration.builder()
//  .securityGroups(java.util.List<java.lang.String>)
//  .subnets(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#security_groups EcsExpressGatewayService#security_groups}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#subnets EcsExpressGatewayService#subnets}. |

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#security_groups EcsExpressGatewayService#security_groups}.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#subnets EcsExpressGatewayService#subnets}.

---

### EcsExpressGatewayServicePrimaryContainer <a name="EcsExpressGatewayServicePrimaryContainer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServicePrimaryContainer;

EcsExpressGatewayServicePrimaryContainer.builder()
//  .awsLogsConfiguration(EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration)
//  .command(java.util.List<java.lang.String>)
//  .containerPort(java.lang.Number)
//  .environment(IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerEnvironment>)
//  .image(java.lang.String)
//  .repositoryCredentials(EcsExpressGatewayServicePrimaryContainerRepositoryCredentials)
//  .secrets(IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerSecrets>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.awsLogsConfiguration">awsLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#aws_logs_configuration EcsExpressGatewayService#aws_logs_configuration}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#command EcsExpressGatewayService#command}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#container_port EcsExpressGatewayService#container_port}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.environment">environment</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#environment EcsExpressGatewayService#environment}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.image">image</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#image EcsExpressGatewayService#image}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.repositoryCredentials">repositoryCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#repository_credentials EcsExpressGatewayService#repository_credentials}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.secrets">secrets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets">EcsExpressGatewayServicePrimaryContainerSecrets</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#secrets EcsExpressGatewayService#secrets}. |

---

##### `awsLogsConfiguration`<sup>Optional</sup> <a name="awsLogsConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.awsLogsConfiguration"></a>

```java
public EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration getAwsLogsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#aws_logs_configuration EcsExpressGatewayService#aws_logs_configuration}.

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#command EcsExpressGatewayService#command}.

---

##### `containerPort`<sup>Optional</sup> <a name="containerPort" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#container_port EcsExpressGatewayService#container_port}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.environment"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerEnvironment> getEnvironment();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#environment EcsExpressGatewayService#environment}.

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#image EcsExpressGatewayService#image}.

---

##### `repositoryCredentials`<sup>Optional</sup> <a name="repositoryCredentials" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.repositoryCredentials"></a>

```java
public EcsExpressGatewayServicePrimaryContainerRepositoryCredentials getRepositoryCredentials();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#repository_credentials EcsExpressGatewayService#repository_credentials}.

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.secrets"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerSecrets> getSecrets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets">EcsExpressGatewayServicePrimaryContainerSecrets</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#secrets EcsExpressGatewayService#secrets}.

---

### EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration <a name="EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration;

EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.builder()
//  .logGroup(java.lang.String)
//  .logStreamPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#log_group EcsExpressGatewayService#log_group}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.property.logStreamPrefix">logStreamPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#log_stream_prefix EcsExpressGatewayService#log_stream_prefix}. |

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#log_group EcsExpressGatewayService#log_group}.

---

##### `logStreamPrefix`<sup>Optional</sup> <a name="logStreamPrefix" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.property.logStreamPrefix"></a>

```java
public java.lang.String getLogStreamPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#log_stream_prefix EcsExpressGatewayService#log_stream_prefix}.

---

### EcsExpressGatewayServicePrimaryContainerEnvironment <a name="EcsExpressGatewayServicePrimaryContainerEnvironment" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServicePrimaryContainerEnvironment;

EcsExpressGatewayServicePrimaryContainerEnvironment.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#name EcsExpressGatewayService#name}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#value EcsExpressGatewayService#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#name EcsExpressGatewayService#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#value EcsExpressGatewayService#value}.

---

### EcsExpressGatewayServicePrimaryContainerRepositoryCredentials <a name="EcsExpressGatewayServicePrimaryContainerRepositoryCredentials" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials;

EcsExpressGatewayServicePrimaryContainerRepositoryCredentials.builder()
//  .credentialsParameter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials.property.credentialsParameter">credentialsParameter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#credentials_parameter EcsExpressGatewayService#credentials_parameter}. |

---

##### `credentialsParameter`<sup>Optional</sup> <a name="credentialsParameter" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials.property.credentialsParameter"></a>

```java
public java.lang.String getCredentialsParameter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#credentials_parameter EcsExpressGatewayService#credentials_parameter}.

---

### EcsExpressGatewayServicePrimaryContainerSecrets <a name="EcsExpressGatewayServicePrimaryContainerSecrets" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServicePrimaryContainerSecrets;

EcsExpressGatewayServicePrimaryContainerSecrets.builder()
//  .name(java.lang.String)
//  .valueFrom(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#name EcsExpressGatewayService#name}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets.property.valueFrom">valueFrom</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#value_from EcsExpressGatewayService#value_from}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#name EcsExpressGatewayService#name}.

---

##### `valueFrom`<sup>Optional</sup> <a name="valueFrom" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets.property.valueFrom"></a>

```java
public java.lang.String getValueFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#value_from EcsExpressGatewayService#value_from}.

---

### EcsExpressGatewayServiceScalingTarget <a name="EcsExpressGatewayServiceScalingTarget" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceScalingTarget;

EcsExpressGatewayServiceScalingTarget.builder()
//  .autoScalingMetric(java.lang.String)
//  .autoScalingTargetValue(java.lang.Number)
//  .maxTaskCount(java.lang.Number)
//  .minTaskCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.autoScalingMetric">autoScalingMetric</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#auto_scaling_metric EcsExpressGatewayService#auto_scaling_metric}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.autoScalingTargetValue">autoScalingTargetValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#auto_scaling_target_value EcsExpressGatewayService#auto_scaling_target_value}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.maxTaskCount">maxTaskCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#max_task_count EcsExpressGatewayService#max_task_count}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.minTaskCount">minTaskCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#min_task_count EcsExpressGatewayService#min_task_count}. |

---

##### `autoScalingMetric`<sup>Optional</sup> <a name="autoScalingMetric" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.autoScalingMetric"></a>

```java
public java.lang.String getAutoScalingMetric();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#auto_scaling_metric EcsExpressGatewayService#auto_scaling_metric}.

---

##### `autoScalingTargetValue`<sup>Optional</sup> <a name="autoScalingTargetValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.autoScalingTargetValue"></a>

```java
public java.lang.Number getAutoScalingTargetValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#auto_scaling_target_value EcsExpressGatewayService#auto_scaling_target_value}.

---

##### `maxTaskCount`<sup>Optional</sup> <a name="maxTaskCount" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.maxTaskCount"></a>

```java
public java.lang.Number getMaxTaskCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#max_task_count EcsExpressGatewayService#max_task_count}.

---

##### `minTaskCount`<sup>Optional</sup> <a name="minTaskCount" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.minTaskCount"></a>

```java
public java.lang.Number getMinTaskCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#min_task_count EcsExpressGatewayService#min_task_count}.

---

### EcsExpressGatewayServiceStatus <a name="EcsExpressGatewayServiceStatus" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatus.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceStatus;

EcsExpressGatewayServiceStatus.builder()
    .build();
```


### EcsExpressGatewayServiceTags <a name="EcsExpressGatewayServiceTags" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceTags;

EcsExpressGatewayServiceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#key EcsExpressGatewayService#key}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#value EcsExpressGatewayService#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#key EcsExpressGatewayService#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_express_gateway_service#value EcsExpressGatewayService#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsExpressGatewayServiceActiveConfigurationsIngressPathsList <a name="EcsExpressGatewayServiceActiveConfigurationsIngressPathsList" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList;

new EcsExpressGatewayServiceActiveConfigurationsIngressPathsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.get"></a>

```java
public EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference <a name="EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference;

new EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.accessType">accessType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPaths">EcsExpressGatewayServiceActiveConfigurationsIngressPaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.accessType"></a>

```java
public java.lang.String getAccessType();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.internalValue"></a>

```java
public EcsExpressGatewayServiceActiveConfigurationsIngressPaths getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPaths">EcsExpressGatewayServiceActiveConfigurationsIngressPaths</a>

---


### EcsExpressGatewayServiceActiveConfigurationsList <a name="EcsExpressGatewayServiceActiveConfigurationsList" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceActiveConfigurationsList;

new EcsExpressGatewayServiceActiveConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.get"></a>

```java
public EcsExpressGatewayServiceActiveConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference <a name="EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference;

new EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration">EcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public EcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration">EcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration</a>

---


### EcsExpressGatewayServiceActiveConfigurationsOutputReference <a name="EcsExpressGatewayServiceActiveConfigurationsOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceActiveConfigurationsOutputReference;

new EcsExpressGatewayServiceActiveConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.cpu">cpu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.healthCheckPath">healthCheckPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.ingressPaths">ingressPaths</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList">EcsExpressGatewayServiceActiveConfigurationsIngressPathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.memory">memory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference">EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.primaryContainer">primaryContainer</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.scalingTarget">scalingTarget</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference">EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.serviceRevisionArn">serviceRevisionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.taskDefinitionArn">taskDefinitionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.taskRoleArn">taskRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurations">EcsExpressGatewayServiceActiveConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.cpu"></a>

```java
public java.lang.String getCpu();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `healthCheckPath`<sup>Required</sup> <a name="healthCheckPath" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.healthCheckPath"></a>

```java
public java.lang.String getHealthCheckPath();
```

- *Type:* java.lang.String

---

##### `ingressPaths`<sup>Required</sup> <a name="ingressPaths" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.ingressPaths"></a>

```java
public EcsExpressGatewayServiceActiveConfigurationsIngressPathsList getIngressPaths();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList">EcsExpressGatewayServiceActiveConfigurationsIngressPathsList</a>

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.networkConfiguration"></a>

```java
public EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference getNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference">EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference</a>

---

##### `primaryContainer`<sup>Required</sup> <a name="primaryContainer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.primaryContainer"></a>

```java
public EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference getPrimaryContainer();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference</a>

---

##### `scalingTarget`<sup>Required</sup> <a name="scalingTarget" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.scalingTarget"></a>

```java
public EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference getScalingTarget();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference">EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference</a>

---

##### `serviceRevisionArn`<sup>Required</sup> <a name="serviceRevisionArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.serviceRevisionArn"></a>

```java
public java.lang.String getServiceRevisionArn();
```

- *Type:* java.lang.String

---

##### `taskDefinitionArn`<sup>Required</sup> <a name="taskDefinitionArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.taskDefinitionArn"></a>

```java
public java.lang.String getTaskDefinitionArn();
```

- *Type:* java.lang.String

---

##### `taskRoleArn`<sup>Required</sup> <a name="taskRoleArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.taskRoleArn"></a>

```java
public java.lang.String getTaskRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.internalValue"></a>

```java
public EcsExpressGatewayServiceActiveConfigurations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurations">EcsExpressGatewayServiceActiveConfigurations</a>

---


### EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference <a name="EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference;

new EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefix">logStreamPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

---

##### `logStreamPrefix`<sup>Required</sup> <a name="logStreamPrefix" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefix"></a>

```java
public java.lang.String getLogStreamPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.internalValue"></a>

```java
public EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration</a>

---


### EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList <a name="EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList;

new EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.get"></a>

```java
public EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference <a name="EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference;

new EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.internalValue"></a>

```java
public EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment</a>

---


### EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference <a name="EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference;

new EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.awsLogsConfiguration">awsLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.repositoryCredentials">repositoryCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.secrets">secrets</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainer">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsLogsConfiguration`<sup>Required</sup> <a name="awsLogsConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.awsLogsConfiguration"></a>

```java
public EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference getAwsLogsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference</a>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.environment"></a>

```java
public EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList getEnvironment();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `repositoryCredentials`<sup>Required</sup> <a name="repositoryCredentials" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.repositoryCredentials"></a>

```java
public EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference getRepositoryCredentials();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference</a>

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.secrets"></a>

```java
public EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList getSecrets();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.internalValue"></a>

```java
public EcsExpressGatewayServiceActiveConfigurationsPrimaryContainer getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainer">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainer</a>

---


### EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference <a name="EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference;

new EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameter">credentialsParameter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credentialsParameter`<sup>Required</sup> <a name="credentialsParameter" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameter"></a>

```java
public java.lang.String getCredentialsParameter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.internalValue"></a>

```java
public EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials</a>

---


### EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList <a name="EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList;

new EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.get"></a>

```java
public EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference <a name="EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference;

new EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.valueFrom">valueFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.valueFrom"></a>

```java
public java.lang.String getValueFrom();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.internalValue"></a>

```java
public EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets</a>

---


### EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference <a name="EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference;

new EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.autoScalingMetric">autoScalingMetric</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.autoScalingTargetValue">autoScalingTargetValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.maxTaskCount">maxTaskCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.minTaskCount">minTaskCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTarget">EcsExpressGatewayServiceActiveConfigurationsScalingTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoScalingMetric`<sup>Required</sup> <a name="autoScalingMetric" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.autoScalingMetric"></a>

```java
public java.lang.String getAutoScalingMetric();
```

- *Type:* java.lang.String

---

##### `autoScalingTargetValue`<sup>Required</sup> <a name="autoScalingTargetValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.autoScalingTargetValue"></a>

```java
public java.lang.Number getAutoScalingTargetValue();
```

- *Type:* java.lang.Number

---

##### `maxTaskCount`<sup>Required</sup> <a name="maxTaskCount" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.maxTaskCount"></a>

```java
public java.lang.Number getMaxTaskCount();
```

- *Type:* java.lang.Number

---

##### `minTaskCount`<sup>Required</sup> <a name="minTaskCount" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.minTaskCount"></a>

```java
public java.lang.Number getMinTaskCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.internalValue"></a>

```java
public EcsExpressGatewayServiceActiveConfigurationsScalingTarget getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTarget">EcsExpressGatewayServiceActiveConfigurationsScalingTarget</a>

---


### EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference <a name="EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference;

new EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.applicationAutoScalingPolicies">applicationAutoScalingPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.scalableTarget">scalableTarget</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling">EcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationAutoScalingPolicies`<sup>Required</sup> <a name="applicationAutoScalingPolicies" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.applicationAutoScalingPolicies"></a>

```java
public java.util.List<java.lang.String> getApplicationAutoScalingPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scalableTarget`<sup>Required</sup> <a name="scalableTarget" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.scalableTarget"></a>

```java
public java.lang.String getScalableTarget();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.internalValue"></a>

```java
public EcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling">EcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling</a>

---


### EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference <a name="EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference;

new EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.listenerArn">listenerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.listenerRuleArn">listenerRuleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.loadBalancerArn">loadBalancerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.loadBalancerSecurityGroups">loadBalancerSecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.targetGroupArns">targetGroupArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPath">EcsExpressGatewayServiceEcsManagedResourceArnsIngressPath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `listenerArn`<sup>Required</sup> <a name="listenerArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.listenerArn"></a>

```java
public java.lang.String getListenerArn();
```

- *Type:* java.lang.String

---

##### `listenerRuleArn`<sup>Required</sup> <a name="listenerRuleArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.listenerRuleArn"></a>

```java
public java.lang.String getListenerRuleArn();
```

- *Type:* java.lang.String

---

##### `loadBalancerArn`<sup>Required</sup> <a name="loadBalancerArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.loadBalancerArn"></a>

```java
public java.lang.String getLoadBalancerArn();
```

- *Type:* java.lang.String

---

##### `loadBalancerSecurityGroups`<sup>Required</sup> <a name="loadBalancerSecurityGroups" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.loadBalancerSecurityGroups"></a>

```java
public java.util.List<java.lang.String> getLoadBalancerSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetGroupArns`<sup>Required</sup> <a name="targetGroupArns" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.targetGroupArns"></a>

```java
public java.util.List<java.lang.String> getTargetGroupArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.internalValue"></a>

```java
public EcsExpressGatewayServiceEcsManagedResourceArnsIngressPath getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPath">EcsExpressGatewayServiceEcsManagedResourceArnsIngressPath</a>

---


### EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference <a name="EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference;

new EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.autoScaling">autoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference">EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.ingressPath">ingressPath</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference">EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.logGroups">logGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.metricAlarms">metricAlarms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.serviceSecurityGroups">serviceSecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArns">EcsExpressGatewayServiceEcsManagedResourceArns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoScaling`<sup>Required</sup> <a name="autoScaling" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.autoScaling"></a>

```java
public EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference getAutoScaling();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference">EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference</a>

---

##### `ingressPath`<sup>Required</sup> <a name="ingressPath" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.ingressPath"></a>

```java
public EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference getIngressPath();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference">EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference</a>

---

##### `logGroups`<sup>Required</sup> <a name="logGroups" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.logGroups"></a>

```java
public java.util.List<java.lang.String> getLogGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricAlarms`<sup>Required</sup> <a name="metricAlarms" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.metricAlarms"></a>

```java
public java.util.List<java.lang.String> getMetricAlarms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceSecurityGroups`<sup>Required</sup> <a name="serviceSecurityGroups" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.serviceSecurityGroups"></a>

```java
public java.util.List<java.lang.String> getServiceSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.internalValue"></a>

```java
public EcsExpressGatewayServiceEcsManagedResourceArns getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArns">EcsExpressGatewayServiceEcsManagedResourceArns</a>

---


### EcsExpressGatewayServiceNetworkConfigurationOutputReference <a name="EcsExpressGatewayServiceNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceNetworkConfigurationOutputReference;

new EcsExpressGatewayServiceNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resetSubnets"></a>

```java
public void resetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsExpressGatewayServiceNetworkConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a>

---


### EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference <a name="EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference;

new EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resetLogStreamPrefix">resetLogStreamPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resetLogGroup"></a>

```java
public void resetLogGroup()
```

##### `resetLogStreamPrefix` <a name="resetLogStreamPrefix" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resetLogStreamPrefix"></a>

```java
public void resetLogStreamPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefixInput">logStreamPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefix">logStreamPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logGroupInput"></a>

```java
public java.lang.String getLogGroupInput();
```

- *Type:* java.lang.String

---

##### `logStreamPrefixInput`<sup>Optional</sup> <a name="logStreamPrefixInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefixInput"></a>

```java
public java.lang.String getLogStreamPrefixInput();
```

- *Type:* java.lang.String

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

---

##### `logStreamPrefix`<sup>Required</sup> <a name="logStreamPrefix" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefix"></a>

```java
public java.lang.String getLogStreamPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a>

---


### EcsExpressGatewayServicePrimaryContainerEnvironmentList <a name="EcsExpressGatewayServicePrimaryContainerEnvironmentList" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServicePrimaryContainerEnvironmentList;

new EcsExpressGatewayServicePrimaryContainerEnvironmentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.get"></a>

```java
public EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerEnvironment> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>>

---


### EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference <a name="EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference;

new EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsExpressGatewayServicePrimaryContainerEnvironment getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>

---


### EcsExpressGatewayServicePrimaryContainerOutputReference <a name="EcsExpressGatewayServicePrimaryContainerOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServicePrimaryContainerOutputReference;

new EcsExpressGatewayServicePrimaryContainerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putAwsLogsConfiguration">putAwsLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putEnvironment">putEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putRepositoryCredentials">putRepositoryCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putSecrets">putSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetAwsLogsConfiguration">resetAwsLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetContainerPort">resetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetRepositoryCredentials">resetRepositoryCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetSecrets">resetSecrets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsLogsConfiguration` <a name="putAwsLogsConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putAwsLogsConfiguration"></a>

```java
public void putAwsLogsConfiguration(EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putAwsLogsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a>

---

##### `putEnvironment` <a name="putEnvironment" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putEnvironment"></a>

```java
public void putEnvironment(IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerEnvironment> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putEnvironment.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>>

---

##### `putRepositoryCredentials` <a name="putRepositoryCredentials" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putRepositoryCredentials"></a>

```java
public void putRepositoryCredentials(EcsExpressGatewayServicePrimaryContainerRepositoryCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putRepositoryCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a>

---

##### `putSecrets` <a name="putSecrets" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putSecrets"></a>

```java
public void putSecrets(IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerSecrets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putSecrets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets">EcsExpressGatewayServicePrimaryContainerSecrets</a>>

---

##### `resetAwsLogsConfiguration` <a name="resetAwsLogsConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetAwsLogsConfiguration"></a>

```java
public void resetAwsLogsConfiguration()
```

##### `resetCommand` <a name="resetCommand" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetCommand"></a>

```java
public void resetCommand()
```

##### `resetContainerPort` <a name="resetContainerPort" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetContainerPort"></a>

```java
public void resetContainerPort()
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetImage` <a name="resetImage" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetImage"></a>

```java
public void resetImage()
```

##### `resetRepositoryCredentials` <a name="resetRepositoryCredentials" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetRepositoryCredentials"></a>

```java
public void resetRepositoryCredentials()
```

##### `resetSecrets` <a name="resetSecrets" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetSecrets"></a>

```java
public void resetSecrets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.awsLogsConfiguration">awsLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference">EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList">EcsExpressGatewayServicePrimaryContainerEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.repositoryCredentials">repositoryCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference">EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.secrets">secrets</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList">EcsExpressGatewayServicePrimaryContainerSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.awsLogsConfigurationInput">awsLogsConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.commandInput">commandInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.containerPortInput">containerPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.environmentInput">environmentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.repositoryCredentialsInput">repositoryCredentialsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.secretsInput">secretsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets">EcsExpressGatewayServicePrimaryContainerSecrets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsLogsConfiguration`<sup>Required</sup> <a name="awsLogsConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.awsLogsConfiguration"></a>

```java
public EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference getAwsLogsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference">EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.environment"></a>

```java
public EcsExpressGatewayServicePrimaryContainerEnvironmentList getEnvironment();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList">EcsExpressGatewayServicePrimaryContainerEnvironmentList</a>

---

##### `repositoryCredentials`<sup>Required</sup> <a name="repositoryCredentials" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.repositoryCredentials"></a>

```java
public EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference getRepositoryCredentials();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference">EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference</a>

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.secrets"></a>

```java
public EcsExpressGatewayServicePrimaryContainerSecretsList getSecrets();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList">EcsExpressGatewayServicePrimaryContainerSecretsList</a>

---

##### `awsLogsConfigurationInput`<sup>Optional</sup> <a name="awsLogsConfigurationInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.awsLogsConfigurationInput"></a>

```java
public IResolvable|EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration getAwsLogsConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a>

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.commandInput"></a>

```java
public java.util.List<java.lang.String> getCommandInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containerPortInput`<sup>Optional</sup> <a name="containerPortInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.containerPortInput"></a>

```java
public java.lang.Number getContainerPortInput();
```

- *Type:* java.lang.Number

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.environmentInput"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerEnvironment> getEnvironmentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>>

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `repositoryCredentialsInput`<sup>Optional</sup> <a name="repositoryCredentialsInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.repositoryCredentialsInput"></a>

```java
public IResolvable|EcsExpressGatewayServicePrimaryContainerRepositoryCredentials getRepositoryCredentialsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a>

---

##### `secretsInput`<sup>Optional</sup> <a name="secretsInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.secretsInput"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerSecrets> getSecretsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets">EcsExpressGatewayServicePrimaryContainerSecrets</a>>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsExpressGatewayServicePrimaryContainer getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a>

---


### EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference <a name="EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference;

new EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.resetCredentialsParameter">resetCredentialsParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCredentialsParameter` <a name="resetCredentialsParameter" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.resetCredentialsParameter"></a>

```java
public void resetCredentialsParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameterInput">credentialsParameterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameter">credentialsParameter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credentialsParameterInput`<sup>Optional</sup> <a name="credentialsParameterInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameterInput"></a>

```java
public java.lang.String getCredentialsParameterInput();
```

- *Type:* java.lang.String

---

##### `credentialsParameter`<sup>Required</sup> <a name="credentialsParameter" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameter"></a>

```java
public java.lang.String getCredentialsParameter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsExpressGatewayServicePrimaryContainerRepositoryCredentials getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a>

---


### EcsExpressGatewayServicePrimaryContainerSecretsList <a name="EcsExpressGatewayServicePrimaryContainerSecretsList" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServicePrimaryContainerSecretsList;

new EcsExpressGatewayServicePrimaryContainerSecretsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.get"></a>

```java
public EcsExpressGatewayServicePrimaryContainerSecretsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets">EcsExpressGatewayServicePrimaryContainerSecrets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerSecrets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets">EcsExpressGatewayServicePrimaryContainerSecrets</a>>

---


### EcsExpressGatewayServicePrimaryContainerSecretsOutputReference <a name="EcsExpressGatewayServicePrimaryContainerSecretsOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference;

new EcsExpressGatewayServicePrimaryContainerSecretsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.resetValueFrom">resetValueFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValueFrom` <a name="resetValueFrom" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.resetValueFrom"></a>

```java
public void resetValueFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.valueFromInput">valueFromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.valueFrom">valueFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets">EcsExpressGatewayServicePrimaryContainerSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueFromInput`<sup>Optional</sup> <a name="valueFromInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.valueFromInput"></a>

```java
public java.lang.String getValueFromInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.valueFrom"></a>

```java
public java.lang.String getValueFrom();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsExpressGatewayServicePrimaryContainerSecrets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets">EcsExpressGatewayServicePrimaryContainerSecrets</a>

---


### EcsExpressGatewayServiceScalingTargetOutputReference <a name="EcsExpressGatewayServiceScalingTargetOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceScalingTargetOutputReference;

new EcsExpressGatewayServiceScalingTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetAutoScalingMetric">resetAutoScalingMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetAutoScalingTargetValue">resetAutoScalingTargetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetMaxTaskCount">resetMaxTaskCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetMinTaskCount">resetMinTaskCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoScalingMetric` <a name="resetAutoScalingMetric" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetAutoScalingMetric"></a>

```java
public void resetAutoScalingMetric()
```

##### `resetAutoScalingTargetValue` <a name="resetAutoScalingTargetValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetAutoScalingTargetValue"></a>

```java
public void resetAutoScalingTargetValue()
```

##### `resetMaxTaskCount` <a name="resetMaxTaskCount" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetMaxTaskCount"></a>

```java
public void resetMaxTaskCount()
```

##### `resetMinTaskCount` <a name="resetMinTaskCount" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetMinTaskCount"></a>

```java
public void resetMinTaskCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingMetricInput">autoScalingMetricInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingTargetValueInput">autoScalingTargetValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.maxTaskCountInput">maxTaskCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.minTaskCountInput">minTaskCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingMetric">autoScalingMetric</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingTargetValue">autoScalingTargetValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.maxTaskCount">maxTaskCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.minTaskCount">minTaskCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoScalingMetricInput`<sup>Optional</sup> <a name="autoScalingMetricInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingMetricInput"></a>

```java
public java.lang.String getAutoScalingMetricInput();
```

- *Type:* java.lang.String

---

##### `autoScalingTargetValueInput`<sup>Optional</sup> <a name="autoScalingTargetValueInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingTargetValueInput"></a>

```java
public java.lang.Number getAutoScalingTargetValueInput();
```

- *Type:* java.lang.Number

---

##### `maxTaskCountInput`<sup>Optional</sup> <a name="maxTaskCountInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.maxTaskCountInput"></a>

```java
public java.lang.Number getMaxTaskCountInput();
```

- *Type:* java.lang.Number

---

##### `minTaskCountInput`<sup>Optional</sup> <a name="minTaskCountInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.minTaskCountInput"></a>

```java
public java.lang.Number getMinTaskCountInput();
```

- *Type:* java.lang.Number

---

##### `autoScalingMetric`<sup>Required</sup> <a name="autoScalingMetric" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingMetric"></a>

```java
public java.lang.String getAutoScalingMetric();
```

- *Type:* java.lang.String

---

##### `autoScalingTargetValue`<sup>Required</sup> <a name="autoScalingTargetValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingTargetValue"></a>

```java
public java.lang.Number getAutoScalingTargetValue();
```

- *Type:* java.lang.Number

---

##### `maxTaskCount`<sup>Required</sup> <a name="maxTaskCount" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.maxTaskCount"></a>

```java
public java.lang.Number getMaxTaskCount();
```

- *Type:* java.lang.Number

---

##### `minTaskCount`<sup>Required</sup> <a name="minTaskCount" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.minTaskCount"></a>

```java
public java.lang.Number getMinTaskCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsExpressGatewayServiceScalingTarget getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a>

---


### EcsExpressGatewayServiceStatusOutputReference <a name="EcsExpressGatewayServiceStatusOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceStatusOutputReference;

new EcsExpressGatewayServiceStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatus">EcsExpressGatewayServiceStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.property.internalValue"></a>

```java
public EcsExpressGatewayServiceStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatus">EcsExpressGatewayServiceStatus</a>

---


### EcsExpressGatewayServiceTagsList <a name="EcsExpressGatewayServiceTagsList" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceTagsList;

new EcsExpressGatewayServiceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.get"></a>

```java
public EcsExpressGatewayServiceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags">EcsExpressGatewayServiceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServiceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags">EcsExpressGatewayServiceTags</a>>

---


### EcsExpressGatewayServiceTagsOutputReference <a name="EcsExpressGatewayServiceTagsOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_express_gateway_service.EcsExpressGatewayServiceTagsOutputReference;

new EcsExpressGatewayServiceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags">EcsExpressGatewayServiceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsExpressGatewayServiceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags">EcsExpressGatewayServiceTags</a>

---



