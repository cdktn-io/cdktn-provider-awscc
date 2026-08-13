# `lambdaCapacityProvider` Submodule <a name="`lambdaCapacityProvider` Submodule" id="@cdktn/provider-awscc.lambdaCapacityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaCapacityProvider <a name="LambdaCapacityProvider" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider awscc_lambda_capacity_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProvider;

LambdaCapacityProvider.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .permissionsConfig(LambdaCapacityProviderPermissionsConfig)
    .vpcConfig(LambdaCapacityProviderVpcConfig)
//  .capacityProviderName(java.lang.String)
//  .capacityProviderScalingConfig(LambdaCapacityProviderCapacityProviderScalingConfig)
//  .instanceRequirements(LambdaCapacityProviderInstanceRequirements)
//  .kmsKeyArn(java.lang.String)
//  .propagateTags(LambdaCapacityProviderPropagateTags)
//  .tags(IResolvable|java.util.List<LambdaCapacityProviderTags>)
//  .telemetryConfig(LambdaCapacityProviderTelemetryConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.permissionsConfig">permissionsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a></code> | The permissions configuration for the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a></code> | The VPC configuration for the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.capacityProviderName">capacityProviderName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#capacity_provider_name LambdaCapacityProvider#capacity_provider_name}. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.capacityProviderScalingConfig">capacityProviderScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a></code> | The scaling configuration for the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.instanceRequirements">instanceRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a></code> | The instance requirements for compute resources managed by the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the KMS key used to encrypt the capacity provider's resources. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.propagateTags">propagateTags</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags">LambdaCapacityProviderPropagateTags</a></code> | Configuration for tag propagation to managed resources launched by the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags">LambdaCapacityProviderTags</a>></code> | A key-value pair that provides metadata for the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.telemetryConfig">telemetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfig">LambdaCapacityProviderTelemetryConfig</a></code> | The telemetry configuration for the capacity provider, including logging settings. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `permissionsConfig`<sup>Required</sup> <a name="permissionsConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.permissionsConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a>

The permissions configuration for the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#permissions_config LambdaCapacityProvider#permissions_config}

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.vpcConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a>

The VPC configuration for the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#vpc_config LambdaCapacityProvider#vpc_config}

---

##### `capacityProviderName`<sup>Optional</sup> <a name="capacityProviderName" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.capacityProviderName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#capacity_provider_name LambdaCapacityProvider#capacity_provider_name}.

---

##### `capacityProviderScalingConfig`<sup>Optional</sup> <a name="capacityProviderScalingConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.capacityProviderScalingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a>

The scaling configuration for the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#capacity_provider_scaling_config LambdaCapacityProvider#capacity_provider_scaling_config}

---

##### `instanceRequirements`<sup>Optional</sup> <a name="instanceRequirements" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.instanceRequirements"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a>

The instance requirements for compute resources managed by the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#instance_requirements LambdaCapacityProvider#instance_requirements}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

The ARN of the KMS key used to encrypt the capacity provider's resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#kms_key_arn LambdaCapacityProvider#kms_key_arn}

---

##### `propagateTags`<sup>Optional</sup> <a name="propagateTags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.propagateTags"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags">LambdaCapacityProviderPropagateTags</a>

Configuration for tag propagation to managed resources launched by the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#propagate_tags LambdaCapacityProvider#propagate_tags}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags">LambdaCapacityProviderTags</a>>

A key-value pair that provides metadata for the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#tags LambdaCapacityProvider#tags}

---

##### `telemetryConfig`<sup>Optional</sup> <a name="telemetryConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.telemetryConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfig">LambdaCapacityProviderTelemetryConfig</a>

The telemetry configuration for the capacity provider, including logging settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#telemetry_config LambdaCapacityProvider#telemetry_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putCapacityProviderScalingConfig">putCapacityProviderScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putInstanceRequirements">putInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putPermissionsConfig">putPermissionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putPropagateTags">putPropagateTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putTelemetryConfig">putTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetCapacityProviderName">resetCapacityProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetCapacityProviderScalingConfig">resetCapacityProviderScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetInstanceRequirements">resetInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetPropagateTags">resetPropagateTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetTelemetryConfig">resetTelemetryConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapacityProviderScalingConfig` <a name="putCapacityProviderScalingConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putCapacityProviderScalingConfig"></a>

```java
public void putCapacityProviderScalingConfig(LambdaCapacityProviderCapacityProviderScalingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putCapacityProviderScalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a>

---

##### `putInstanceRequirements` <a name="putInstanceRequirements" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putInstanceRequirements"></a>

```java
public void putInstanceRequirements(LambdaCapacityProviderInstanceRequirements value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putInstanceRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a>

---

##### `putPermissionsConfig` <a name="putPermissionsConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putPermissionsConfig"></a>

```java
public void putPermissionsConfig(LambdaCapacityProviderPermissionsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putPermissionsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a>

---

##### `putPropagateTags` <a name="putPropagateTags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putPropagateTags"></a>

```java
public void putPropagateTags(LambdaCapacityProviderPropagateTags value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putPropagateTags.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags">LambdaCapacityProviderPropagateTags</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<LambdaCapacityProviderTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags">LambdaCapacityProviderTags</a>>

---

##### `putTelemetryConfig` <a name="putTelemetryConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putTelemetryConfig"></a>

```java
public void putTelemetryConfig(LambdaCapacityProviderTelemetryConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putTelemetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfig">LambdaCapacityProviderTelemetryConfig</a>

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putVpcConfig"></a>

```java
public void putVpcConfig(LambdaCapacityProviderVpcConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a>

---

##### `resetCapacityProviderName` <a name="resetCapacityProviderName" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetCapacityProviderName"></a>

```java
public void resetCapacityProviderName()
```

##### `resetCapacityProviderScalingConfig` <a name="resetCapacityProviderScalingConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetCapacityProviderScalingConfig"></a>

```java
public void resetCapacityProviderScalingConfig()
```

##### `resetInstanceRequirements` <a name="resetInstanceRequirements" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetInstanceRequirements"></a>

```java
public void resetInstanceRequirements()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetPropagateTags` <a name="resetPropagateTags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetPropagateTags"></a>

```java
public void resetPropagateTags()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetTags"></a>

```java
public void resetTags()
```

##### `resetTelemetryConfig` <a name="resetTelemetryConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetTelemetryConfig"></a>

```java
public void resetTelemetryConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaCapacityProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.isConstruct"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProvider;

LambdaCapacityProvider.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProvider;

LambdaCapacityProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProvider;

LambdaCapacityProvider.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProvider;

LambdaCapacityProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LambdaCapacityProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LambdaCapacityProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LambdaCapacityProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LambdaCapacityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LambdaCapacityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.capacityProviderScalingConfig">capacityProviderScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference">LambdaCapacityProviderCapacityProviderScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.instanceRequirements">instanceRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference">LambdaCapacityProviderInstanceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.permissionsConfig">permissionsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference">LambdaCapacityProviderPermissionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.propagateTags">propagateTags</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference">LambdaCapacityProviderPropagateTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList">LambdaCapacityProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.telemetryConfig">telemetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference">LambdaCapacityProviderTelemetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference">LambdaCapacityProviderVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.capacityProviderNameInput">capacityProviderNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.capacityProviderScalingConfigInput">capacityProviderScalingConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.instanceRequirementsInput">instanceRequirementsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.permissionsConfigInput">permissionsConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.propagateTagsInput">propagateTagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags">LambdaCapacityProviderPropagateTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags">LambdaCapacityProviderTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.telemetryConfigInput">telemetryConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfig">LambdaCapacityProviderTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.vpcConfigInput">vpcConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.capacityProviderName">capacityProviderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `capacityProviderScalingConfig`<sup>Required</sup> <a name="capacityProviderScalingConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.capacityProviderScalingConfig"></a>

```java
public LambdaCapacityProviderCapacityProviderScalingConfigOutputReference getCapacityProviderScalingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference">LambdaCapacityProviderCapacityProviderScalingConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceRequirements`<sup>Required</sup> <a name="instanceRequirements" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.instanceRequirements"></a>

```java
public LambdaCapacityProviderInstanceRequirementsOutputReference getInstanceRequirements();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference">LambdaCapacityProviderInstanceRequirementsOutputReference</a>

---

##### `permissionsConfig`<sup>Required</sup> <a name="permissionsConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.permissionsConfig"></a>

```java
public LambdaCapacityProviderPermissionsConfigOutputReference getPermissionsConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference">LambdaCapacityProviderPermissionsConfigOutputReference</a>

---

##### `propagateTags`<sup>Required</sup> <a name="propagateTags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.propagateTags"></a>

```java
public LambdaCapacityProviderPropagateTagsOutputReference getPropagateTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference">LambdaCapacityProviderPropagateTagsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.tags"></a>

```java
public LambdaCapacityProviderTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList">LambdaCapacityProviderTagsList</a>

---

##### `telemetryConfig`<sup>Required</sup> <a name="telemetryConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.telemetryConfig"></a>

```java
public LambdaCapacityProviderTelemetryConfigOutputReference getTelemetryConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference">LambdaCapacityProviderTelemetryConfigOutputReference</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.vpcConfig"></a>

```java
public LambdaCapacityProviderVpcConfigOutputReference getVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference">LambdaCapacityProviderVpcConfigOutputReference</a>

---

##### `capacityProviderNameInput`<sup>Optional</sup> <a name="capacityProviderNameInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.capacityProviderNameInput"></a>

```java
public java.lang.String getCapacityProviderNameInput();
```

- *Type:* java.lang.String

---

##### `capacityProviderScalingConfigInput`<sup>Optional</sup> <a name="capacityProviderScalingConfigInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.capacityProviderScalingConfigInput"></a>

```java
public IResolvable|LambdaCapacityProviderCapacityProviderScalingConfig getCapacityProviderScalingConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a>

---

##### `instanceRequirementsInput`<sup>Optional</sup> <a name="instanceRequirementsInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.instanceRequirementsInput"></a>

```java
public IResolvable|LambdaCapacityProviderInstanceRequirements getInstanceRequirementsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a>

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `permissionsConfigInput`<sup>Optional</sup> <a name="permissionsConfigInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.permissionsConfigInput"></a>

```java
public IResolvable|LambdaCapacityProviderPermissionsConfig getPermissionsConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a>

---

##### `propagateTagsInput`<sup>Optional</sup> <a name="propagateTagsInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.propagateTagsInput"></a>

```java
public IResolvable|LambdaCapacityProviderPropagateTags getPropagateTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags">LambdaCapacityProviderPropagateTags</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.tagsInput"></a>

```java
public IResolvable|java.util.List<LambdaCapacityProviderTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags">LambdaCapacityProviderTags</a>>

---

##### `telemetryConfigInput`<sup>Optional</sup> <a name="telemetryConfigInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.telemetryConfigInput"></a>

```java
public IResolvable|LambdaCapacityProviderTelemetryConfig getTelemetryConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfig">LambdaCapacityProviderTelemetryConfig</a>

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.vpcConfigInput"></a>

```java
public IResolvable|LambdaCapacityProviderVpcConfig getVpcConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a>

---

##### `capacityProviderName`<sup>Required</sup> <a name="capacityProviderName" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.capacityProviderName"></a>

```java
public java.lang.String getCapacityProviderName();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaCapacityProviderCapacityProviderScalingConfig <a name="LambdaCapacityProviderCapacityProviderScalingConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProviderCapacityProviderScalingConfig;

LambdaCapacityProviderCapacityProviderScalingConfig.builder()
//  .maxVCpuCount(java.lang.Number)
//  .scalingMode(java.lang.String)
//  .scalingPolicies(IResolvable|java.util.List<LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.property.maxVCpuCount">maxVCpuCount</a></code> | <code>java.lang.Number</code> | The maximum number of vCPUs that the capacity provider can provision across all compute instances. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.property.scalingMode">scalingMode</a></code> | <code>java.lang.String</code> | The scaling mode that determines how the capacity provider responds to changes in demand. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.property.scalingPolicies">scalingPolicies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>></code> | A list of target tracking scaling policies for the capacity provider. |

---

##### `maxVCpuCount`<sup>Optional</sup> <a name="maxVCpuCount" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.property.maxVCpuCount"></a>

```java
public java.lang.Number getMaxVCpuCount();
```

- *Type:* java.lang.Number

The maximum number of vCPUs that the capacity provider can provision across all compute instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#max_v_cpu_count LambdaCapacityProvider#max_v_cpu_count}

---

##### `scalingMode`<sup>Optional</sup> <a name="scalingMode" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.property.scalingMode"></a>

```java
public java.lang.String getScalingMode();
```

- *Type:* java.lang.String

The scaling mode that determines how the capacity provider responds to changes in demand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#scaling_mode LambdaCapacityProvider#scaling_mode}

---

##### `scalingPolicies`<sup>Optional</sup> <a name="scalingPolicies" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.property.scalingPolicies"></a>

```java
public IResolvable|java.util.List<LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies> getScalingPolicies();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>>

A list of target tracking scaling policies for the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#scaling_policies LambdaCapacityProvider#scaling_policies}

---

### LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies <a name="LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies;

LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies.builder()
//  .predefinedMetricType(java.lang.String)
//  .targetValue(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies.property.predefinedMetricType">predefinedMetricType</a></code> | <code>java.lang.String</code> | The predefined metric type to track for scaling decisions. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies.property.targetValue">targetValue</a></code> | <code>java.lang.Number</code> | The target value for the metric that the scaling policy attempts to maintain through scaling actions. |

---

##### `predefinedMetricType`<sup>Optional</sup> <a name="predefinedMetricType" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies.property.predefinedMetricType"></a>

```java
public java.lang.String getPredefinedMetricType();
```

- *Type:* java.lang.String

The predefined metric type to track for scaling decisions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#predefined_metric_type LambdaCapacityProvider#predefined_metric_type}

---

##### `targetValue`<sup>Optional</sup> <a name="targetValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies.property.targetValue"></a>

```java
public java.lang.Number getTargetValue();
```

- *Type:* java.lang.Number

The target value for the metric that the scaling policy attempts to maintain through scaling actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#target_value LambdaCapacityProvider#target_value}

---

### LambdaCapacityProviderConfig <a name="LambdaCapacityProviderConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProviderConfig;

LambdaCapacityProviderConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .permissionsConfig(LambdaCapacityProviderPermissionsConfig)
    .vpcConfig(LambdaCapacityProviderVpcConfig)
//  .capacityProviderName(java.lang.String)
//  .capacityProviderScalingConfig(LambdaCapacityProviderCapacityProviderScalingConfig)
//  .instanceRequirements(LambdaCapacityProviderInstanceRequirements)
//  .kmsKeyArn(java.lang.String)
//  .propagateTags(LambdaCapacityProviderPropagateTags)
//  .tags(IResolvable|java.util.List<LambdaCapacityProviderTags>)
//  .telemetryConfig(LambdaCapacityProviderTelemetryConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.permissionsConfig">permissionsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a></code> | The permissions configuration for the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a></code> | The VPC configuration for the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.capacityProviderName">capacityProviderName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#capacity_provider_name LambdaCapacityProvider#capacity_provider_name}. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.capacityProviderScalingConfig">capacityProviderScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a></code> | The scaling configuration for the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.instanceRequirements">instanceRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a></code> | The instance requirements for compute resources managed by the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the KMS key used to encrypt the capacity provider's resources. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.propagateTags">propagateTags</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags">LambdaCapacityProviderPropagateTags</a></code> | Configuration for tag propagation to managed resources launched by the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags">LambdaCapacityProviderTags</a>></code> | A key-value pair that provides metadata for the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.telemetryConfig">telemetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfig">LambdaCapacityProviderTelemetryConfig</a></code> | The telemetry configuration for the capacity provider, including logging settings. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `permissionsConfig`<sup>Required</sup> <a name="permissionsConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.permissionsConfig"></a>

```java
public LambdaCapacityProviderPermissionsConfig getPermissionsConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a>

The permissions configuration for the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#permissions_config LambdaCapacityProvider#permissions_config}

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.vpcConfig"></a>

```java
public LambdaCapacityProviderVpcConfig getVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a>

The VPC configuration for the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#vpc_config LambdaCapacityProvider#vpc_config}

---

##### `capacityProviderName`<sup>Optional</sup> <a name="capacityProviderName" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.capacityProviderName"></a>

```java
public java.lang.String getCapacityProviderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#capacity_provider_name LambdaCapacityProvider#capacity_provider_name}.

---

##### `capacityProviderScalingConfig`<sup>Optional</sup> <a name="capacityProviderScalingConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.capacityProviderScalingConfig"></a>

```java
public LambdaCapacityProviderCapacityProviderScalingConfig getCapacityProviderScalingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a>

The scaling configuration for the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#capacity_provider_scaling_config LambdaCapacityProvider#capacity_provider_scaling_config}

---

##### `instanceRequirements`<sup>Optional</sup> <a name="instanceRequirements" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.instanceRequirements"></a>

```java
public LambdaCapacityProviderInstanceRequirements getInstanceRequirements();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a>

The instance requirements for compute resources managed by the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#instance_requirements LambdaCapacityProvider#instance_requirements}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

The ARN of the KMS key used to encrypt the capacity provider's resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#kms_key_arn LambdaCapacityProvider#kms_key_arn}

---

##### `propagateTags`<sup>Optional</sup> <a name="propagateTags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.propagateTags"></a>

```java
public LambdaCapacityProviderPropagateTags getPropagateTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags">LambdaCapacityProviderPropagateTags</a>

Configuration for tag propagation to managed resources launched by the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#propagate_tags LambdaCapacityProvider#propagate_tags}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.tags"></a>

```java
public IResolvable|java.util.List<LambdaCapacityProviderTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags">LambdaCapacityProviderTags</a>>

A key-value pair that provides metadata for the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#tags LambdaCapacityProvider#tags}

---

##### `telemetryConfig`<sup>Optional</sup> <a name="telemetryConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.telemetryConfig"></a>

```java
public LambdaCapacityProviderTelemetryConfig getTelemetryConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfig">LambdaCapacityProviderTelemetryConfig</a>

The telemetry configuration for the capacity provider, including logging settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#telemetry_config LambdaCapacityProvider#telemetry_config}

---

### LambdaCapacityProviderInstanceRequirements <a name="LambdaCapacityProviderInstanceRequirements" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProviderInstanceRequirements;

LambdaCapacityProviderInstanceRequirements.builder()
//  .allowedInstanceTypes(java.util.List<java.lang.String>)
//  .architectures(java.util.List<java.lang.String>)
//  .excludedInstanceTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.property.allowedInstanceTypes">allowedInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | A list of EC2 instance types that the capacity provider is allowed to use. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.property.architectures">architectures</a></code> | <code>java.util.List<java.lang.String></code> | A list of supported CPU architectures for compute instances. Valid values include ``x86_64`` and ``arm64``. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.property.excludedInstanceTypes">excludedInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | A list of EC2 instance types that the capacity provider should not use, even if they meet other requirements. |

---

##### `allowedInstanceTypes`<sup>Optional</sup> <a name="allowedInstanceTypes" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.property.allowedInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getAllowedInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

A list of EC2 instance types that the capacity provider is allowed to use.

If not specified, all compatible instance types are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#allowed_instance_types LambdaCapacityProvider#allowed_instance_types}

---

##### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.property.architectures"></a>

```java
public java.util.List<java.lang.String> getArchitectures();
```

- *Type:* java.util.List<java.lang.String>

A list of supported CPU architectures for compute instances. Valid values include ``x86_64`` and ``arm64``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#architectures LambdaCapacityProvider#architectures}

---

##### `excludedInstanceTypes`<sup>Optional</sup> <a name="excludedInstanceTypes" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.property.excludedInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getExcludedInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

A list of EC2 instance types that the capacity provider should not use, even if they meet other requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#excluded_instance_types LambdaCapacityProvider#excluded_instance_types}

---

### LambdaCapacityProviderPermissionsConfig <a name="LambdaCapacityProviderPermissionsConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProviderPermissionsConfig;

LambdaCapacityProviderPermissionsConfig.builder()
    .capacityProviderOperatorRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig.property.capacityProviderOperatorRoleArn">capacityProviderOperatorRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role that the capacity provider uses to manage compute instances and other AWS resources. |

---

##### `capacityProviderOperatorRoleArn`<sup>Required</sup> <a name="capacityProviderOperatorRoleArn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig.property.capacityProviderOperatorRoleArn"></a>

```java
public java.lang.String getCapacityProviderOperatorRoleArn();
```

- *Type:* java.lang.String

The ARN of the IAM role that the capacity provider uses to manage compute instances and other AWS resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#capacity_provider_operator_role_arn LambdaCapacityProvider#capacity_provider_operator_role_arn}

---

### LambdaCapacityProviderPropagateTags <a name="LambdaCapacityProviderPropagateTags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProviderPropagateTags;

LambdaCapacityProviderPropagateTags.builder()
//  .explicitTags(IResolvable|java.util.List<LambdaCapacityProviderPropagateTagsExplicitTags>)
//  .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags.property.explicitTags">explicitTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags">LambdaCapacityProviderPropagateTagsExplicitTags</a>></code> | A list of tags to explicitly propagate to managed resources. Maximum of 40 tags. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags.property.mode">mode</a></code> | <code>java.lang.String</code> | The mode for tag propagation. Use ``Explicit`` to propagate specific tags, or ``None`` to disable propagation. |

---

##### `explicitTags`<sup>Optional</sup> <a name="explicitTags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags.property.explicitTags"></a>

```java
public IResolvable|java.util.List<LambdaCapacityProviderPropagateTagsExplicitTags> getExplicitTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags">LambdaCapacityProviderPropagateTagsExplicitTags</a>>

A list of tags to explicitly propagate to managed resources. Maximum of 40 tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#explicit_tags LambdaCapacityProvider#explicit_tags}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

The mode for tag propagation. Use ``Explicit`` to propagate specific tags, or ``None`` to disable propagation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#mode LambdaCapacityProvider#mode}

---

### LambdaCapacityProviderPropagateTagsExplicitTags <a name="LambdaCapacityProviderPropagateTagsExplicitTags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProviderPropagateTagsExplicitTags;

LambdaCapacityProviderPropagateTagsExplicitTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#key LambdaCapacityProvider#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#value LambdaCapacityProvider#value}

---

### LambdaCapacityProviderTags <a name="LambdaCapacityProviderTags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProviderTags;

LambdaCapacityProviderTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#key LambdaCapacityProvider#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#value LambdaCapacityProvider#value}

---

### LambdaCapacityProviderTelemetryConfig <a name="LambdaCapacityProviderTelemetryConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProviderTelemetryConfig;

LambdaCapacityProviderTelemetryConfig.builder()
//  .loggingConfig(LambdaCapacityProviderTelemetryConfigLoggingConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfig">LambdaCapacityProviderTelemetryConfigLoggingConfig</a></code> | The capacity provider's Amazon CloudWatch Logs configuration settings. |

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfig.property.loggingConfig"></a>

```java
public LambdaCapacityProviderTelemetryConfigLoggingConfig getLoggingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfig">LambdaCapacityProviderTelemetryConfigLoggingConfig</a>

The capacity provider's Amazon CloudWatch Logs configuration settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#logging_config LambdaCapacityProvider#logging_config}

---

### LambdaCapacityProviderTelemetryConfigLoggingConfig <a name="LambdaCapacityProviderTelemetryConfigLoggingConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProviderTelemetryConfigLoggingConfig;

LambdaCapacityProviderTelemetryConfigLoggingConfig.builder()
//  .logGroup(java.lang.String)
//  .systemLogLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfig.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | The name of the Amazon CloudWatch log group the capacity provider sends logs to. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfig.property.systemLogLevel">systemLogLevel</a></code> | <code>java.lang.String</code> | Set this property to filter the system logs for your capacity provider that Lambda sends to CloudWatch. |

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfig.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

The name of the Amazon CloudWatch log group the capacity provider sends logs to.

By default, Lambda capacity providers send logs to a default log group named `/aws/lambda/capacity-provider/<capacity provider name>`. To use a different log group, enter an existing log group or enter a new log group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#log_group LambdaCapacityProvider#log_group}

---

##### `systemLogLevel`<sup>Optional</sup> <a name="systemLogLevel" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfig.property.systemLogLevel"></a>

```java
public java.lang.String getSystemLogLevel();
```

- *Type:* java.lang.String

Set this property to filter the system logs for your capacity provider that Lambda sends to CloudWatch.

Lambda only sends system logs at the selected level of detail and lower, where `DEBUG` is the highest level and `WARN` is the lowest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#system_log_level LambdaCapacityProvider#system_log_level}

---

### LambdaCapacityProviderVpcConfig <a name="LambdaCapacityProviderVpcConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProviderVpcConfig;

LambdaCapacityProviderVpcConfig.builder()
    .securityGroupIds(java.util.List<java.lang.String>)
    .subnetIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of security group IDs that control network access for compute instances managed by the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of subnet IDs where the capacity provider launches compute instances. |

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

A list of security group IDs that control network access for compute instances managed by the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#security_group_ids LambdaCapacityProvider#security_group_ids}

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

A list of subnet IDs where the capacity provider launches compute instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_capacity_provider#subnet_ids LambdaCapacityProvider#subnet_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaCapacityProviderCapacityProviderScalingConfigOutputReference <a name="LambdaCapacityProviderCapacityProviderScalingConfigOutputReference" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference;

new LambdaCapacityProviderCapacityProviderScalingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.putScalingPolicies">putScalingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resetMaxVCpuCount">resetMaxVCpuCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resetScalingMode">resetScalingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resetScalingPolicies">resetScalingPolicies</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScalingPolicies` <a name="putScalingPolicies" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.putScalingPolicies"></a>

```java
public void putScalingPolicies(IResolvable|java.util.List<LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.putScalingPolicies.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>>

---

##### `resetMaxVCpuCount` <a name="resetMaxVCpuCount" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resetMaxVCpuCount"></a>

```java
public void resetMaxVCpuCount()
```

##### `resetScalingMode` <a name="resetScalingMode" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resetScalingMode"></a>

```java
public void resetScalingMode()
```

##### `resetScalingPolicies` <a name="resetScalingPolicies" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resetScalingPolicies"></a>

```java
public void resetScalingPolicies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingPolicies">scalingPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList">LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.maxVCpuCountInput">maxVCpuCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingModeInput">scalingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingPoliciesInput">scalingPoliciesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.maxVCpuCount">maxVCpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingMode">scalingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scalingPolicies`<sup>Required</sup> <a name="scalingPolicies" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingPolicies"></a>

```java
public LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList getScalingPolicies();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList">LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList</a>

---

##### `maxVCpuCountInput`<sup>Optional</sup> <a name="maxVCpuCountInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.maxVCpuCountInput"></a>

```java
public java.lang.Number getMaxVCpuCountInput();
```

- *Type:* java.lang.Number

---

##### `scalingModeInput`<sup>Optional</sup> <a name="scalingModeInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingModeInput"></a>

```java
public java.lang.String getScalingModeInput();
```

- *Type:* java.lang.String

---

##### `scalingPoliciesInput`<sup>Optional</sup> <a name="scalingPoliciesInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingPoliciesInput"></a>

```java
public IResolvable|java.util.List<LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies> getScalingPoliciesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>>

---

##### `maxVCpuCount`<sup>Required</sup> <a name="maxVCpuCount" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.maxVCpuCount"></a>

```java
public java.lang.Number getMaxVCpuCount();
```

- *Type:* java.lang.Number

---

##### `scalingMode`<sup>Required</sup> <a name="scalingMode" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingMode"></a>

```java
public java.lang.String getScalingMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaCapacityProviderCapacityProviderScalingConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a>

---


### LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList <a name="LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList;

new LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.get"></a>

```java
public LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>>

---


### LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference <a name="LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference;

new LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resetPredefinedMetricType">resetPredefinedMetricType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resetTargetValue">resetTargetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPredefinedMetricType` <a name="resetPredefinedMetricType" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resetPredefinedMetricType"></a>

```java
public void resetPredefinedMetricType()
```

##### `resetTargetValue` <a name="resetTargetValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resetTargetValue"></a>

```java
public void resetTargetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.predefinedMetricTypeInput">predefinedMetricTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.targetValueInput">targetValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.predefinedMetricType">predefinedMetricType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.targetValue">targetValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `predefinedMetricTypeInput`<sup>Optional</sup> <a name="predefinedMetricTypeInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.predefinedMetricTypeInput"></a>

```java
public java.lang.String getPredefinedMetricTypeInput();
```

- *Type:* java.lang.String

---

##### `targetValueInput`<sup>Optional</sup> <a name="targetValueInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.targetValueInput"></a>

```java
public java.lang.Number getTargetValueInput();
```

- *Type:* java.lang.Number

---

##### `predefinedMetricType`<sup>Required</sup> <a name="predefinedMetricType" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.predefinedMetricType"></a>

```java
public java.lang.String getPredefinedMetricType();
```

- *Type:* java.lang.String

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.targetValue"></a>

```java
public java.lang.Number getTargetValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>

---


### LambdaCapacityProviderInstanceRequirementsOutputReference <a name="LambdaCapacityProviderInstanceRequirementsOutputReference" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProviderInstanceRequirementsOutputReference;

new LambdaCapacityProviderInstanceRequirementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resetAllowedInstanceTypes">resetAllowedInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resetArchitectures">resetArchitectures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resetExcludedInstanceTypes">resetExcludedInstanceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedInstanceTypes` <a name="resetAllowedInstanceTypes" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resetAllowedInstanceTypes"></a>

```java
public void resetAllowedInstanceTypes()
```

##### `resetArchitectures` <a name="resetArchitectures" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resetArchitectures"></a>

```java
public void resetArchitectures()
```

##### `resetExcludedInstanceTypes` <a name="resetExcludedInstanceTypes" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resetExcludedInstanceTypes"></a>

```java
public void resetExcludedInstanceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.allowedInstanceTypesInput">allowedInstanceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.architecturesInput">architecturesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.excludedInstanceTypesInput">excludedInstanceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.allowedInstanceTypes">allowedInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.architectures">architectures</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.excludedInstanceTypes">excludedInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedInstanceTypesInput`<sup>Optional</sup> <a name="allowedInstanceTypesInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.allowedInstanceTypesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedInstanceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `architecturesInput`<sup>Optional</sup> <a name="architecturesInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.architecturesInput"></a>

```java
public java.util.List<java.lang.String> getArchitecturesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedInstanceTypesInput`<sup>Optional</sup> <a name="excludedInstanceTypesInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.excludedInstanceTypesInput"></a>

```java
public java.util.List<java.lang.String> getExcludedInstanceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedInstanceTypes`<sup>Required</sup> <a name="allowedInstanceTypes" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.allowedInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getAllowedInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `architectures`<sup>Required</sup> <a name="architectures" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.architectures"></a>

```java
public java.util.List<java.lang.String> getArchitectures();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedInstanceTypes`<sup>Required</sup> <a name="excludedInstanceTypes" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.excludedInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getExcludedInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaCapacityProviderInstanceRequirements getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a>

---


### LambdaCapacityProviderPermissionsConfigOutputReference <a name="LambdaCapacityProviderPermissionsConfigOutputReference" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProviderPermissionsConfigOutputReference;

new LambdaCapacityProviderPermissionsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.capacityProviderOperatorRoleArnInput">capacityProviderOperatorRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.capacityProviderOperatorRoleArn">capacityProviderOperatorRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityProviderOperatorRoleArnInput`<sup>Optional</sup> <a name="capacityProviderOperatorRoleArnInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.capacityProviderOperatorRoleArnInput"></a>

```java
public java.lang.String getCapacityProviderOperatorRoleArnInput();
```

- *Type:* java.lang.String

---

##### `capacityProviderOperatorRoleArn`<sup>Required</sup> <a name="capacityProviderOperatorRoleArn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.capacityProviderOperatorRoleArn"></a>

```java
public java.lang.String getCapacityProviderOperatorRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaCapacityProviderPermissionsConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a>

---


### LambdaCapacityProviderPropagateTagsExplicitTagsList <a name="LambdaCapacityProviderPropagateTagsExplicitTagsList" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProviderPropagateTagsExplicitTagsList;

new LambdaCapacityProviderPropagateTagsExplicitTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.get"></a>

```java
public LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags">LambdaCapacityProviderPropagateTagsExplicitTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LambdaCapacityProviderPropagateTagsExplicitTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags">LambdaCapacityProviderPropagateTagsExplicitTags</a>>

---


### LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference <a name="LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference;

new LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags">LambdaCapacityProviderPropagateTagsExplicitTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaCapacityProviderPropagateTagsExplicitTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags">LambdaCapacityProviderPropagateTagsExplicitTags</a>

---


### LambdaCapacityProviderPropagateTagsOutputReference <a name="LambdaCapacityProviderPropagateTagsOutputReference" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProviderPropagateTagsOutputReference;

new LambdaCapacityProviderPropagateTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.putExplicitTags">putExplicitTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.resetExplicitTags">resetExplicitTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExplicitTags` <a name="putExplicitTags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.putExplicitTags"></a>

```java
public void putExplicitTags(IResolvable|java.util.List<LambdaCapacityProviderPropagateTagsExplicitTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.putExplicitTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags">LambdaCapacityProviderPropagateTagsExplicitTags</a>>

---

##### `resetExplicitTags` <a name="resetExplicitTags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.resetExplicitTags"></a>

```java
public void resetExplicitTags()
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.resetMode"></a>

```java
public void resetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.explicitTags">explicitTags</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList">LambdaCapacityProviderPropagateTagsExplicitTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.explicitTagsInput">explicitTagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags">LambdaCapacityProviderPropagateTagsExplicitTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags">LambdaCapacityProviderPropagateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `explicitTags`<sup>Required</sup> <a name="explicitTags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.explicitTags"></a>

```java
public LambdaCapacityProviderPropagateTagsExplicitTagsList getExplicitTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList">LambdaCapacityProviderPropagateTagsExplicitTagsList</a>

---

##### `explicitTagsInput`<sup>Optional</sup> <a name="explicitTagsInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.explicitTagsInput"></a>

```java
public IResolvable|java.util.List<LambdaCapacityProviderPropagateTagsExplicitTags> getExplicitTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags">LambdaCapacityProviderPropagateTagsExplicitTags</a>>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaCapacityProviderPropagateTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags">LambdaCapacityProviderPropagateTags</a>

---


### LambdaCapacityProviderTagsList <a name="LambdaCapacityProviderTagsList" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProviderTagsList;

new LambdaCapacityProviderTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.get"></a>

```java
public LambdaCapacityProviderTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags">LambdaCapacityProviderTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LambdaCapacityProviderTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags">LambdaCapacityProviderTags</a>>

---


### LambdaCapacityProviderTagsOutputReference <a name="LambdaCapacityProviderTagsOutputReference" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProviderTagsOutputReference;

new LambdaCapacityProviderTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags">LambdaCapacityProviderTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaCapacityProviderTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags">LambdaCapacityProviderTags</a>

---


### LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference <a name="LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference;

new LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.resetSystemLogLevel">resetSystemLogLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.resetLogGroup"></a>

```java
public void resetLogGroup()
```

##### `resetSystemLogLevel` <a name="resetSystemLogLevel" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.resetSystemLogLevel"></a>

```java
public void resetSystemLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.systemLogLevelInput">systemLogLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.systemLogLevel">systemLogLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfig">LambdaCapacityProviderTelemetryConfigLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.logGroupInput"></a>

```java
public java.lang.String getLogGroupInput();
```

- *Type:* java.lang.String

---

##### `systemLogLevelInput`<sup>Optional</sup> <a name="systemLogLevelInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.systemLogLevelInput"></a>

```java
public java.lang.String getSystemLogLevelInput();
```

- *Type:* java.lang.String

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

---

##### `systemLogLevel`<sup>Required</sup> <a name="systemLogLevel" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.systemLogLevel"></a>

```java
public java.lang.String getSystemLogLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaCapacityProviderTelemetryConfigLoggingConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfig">LambdaCapacityProviderTelemetryConfigLoggingConfig</a>

---


### LambdaCapacityProviderTelemetryConfigOutputReference <a name="LambdaCapacityProviderTelemetryConfigOutputReference" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProviderTelemetryConfigOutputReference;

new LambdaCapacityProviderTelemetryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.putLoggingConfig"></a>

```java
public void putLoggingConfig(LambdaCapacityProviderTelemetryConfigLoggingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfig">LambdaCapacityProviderTelemetryConfigLoggingConfig</a>

---

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.resetLoggingConfig"></a>

```java
public void resetLoggingConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference">LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.property.loggingConfigInput">loggingConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfig">LambdaCapacityProviderTelemetryConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfig">LambdaCapacityProviderTelemetryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.property.loggingConfig"></a>

```java
public LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference getLoggingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference">LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference</a>

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.property.loggingConfigInput"></a>

```java
public IResolvable|LambdaCapacityProviderTelemetryConfigLoggingConfig getLoggingConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfig">LambdaCapacityProviderTelemetryConfigLoggingConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaCapacityProviderTelemetryConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfig">LambdaCapacityProviderTelemetryConfig</a>

---


### LambdaCapacityProviderVpcConfigOutputReference <a name="LambdaCapacityProviderVpcConfigOutputReference" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_capacity_provider.LambdaCapacityProviderVpcConfigOutputReference;

new LambdaCapacityProviderVpcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaCapacityProviderVpcConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a>

---



