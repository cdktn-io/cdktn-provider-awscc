# `codebuildFleet` Submodule <a name="`codebuildFleet` Submodule" id="@cdktn/provider-awscc.codebuildFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodebuildFleet <a name="CodebuildFleet" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet awscc_codebuild_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer"></a>

```java
import io.cdktn.providers.awscc.codebuild_fleet.CodebuildFleet;

CodebuildFleet.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .baseCapacity(java.lang.Number)
//  .computeConfiguration(CodebuildFleetComputeConfiguration)
//  .computeType(java.lang.String)
//  .environmentType(java.lang.String)
//  .fleetProxyConfiguration(CodebuildFleetFleetProxyConfiguration)
//  .fleetServiceRole(java.lang.String)
//  .fleetVpcConfig(CodebuildFleetFleetVpcConfig)
//  .imageId(java.lang.String)
//  .name(java.lang.String)
//  .overflowBehavior(java.lang.String)
//  .scalingConfiguration(CodebuildFleetScalingConfiguration)
//  .tags(IResolvable|java.util.List<CodebuildFleetTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.baseCapacity">baseCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#base_capacity CodebuildFleet#base_capacity}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.computeConfiguration">computeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#compute_configuration CodebuildFleet#compute_configuration}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.computeType">computeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#compute_type CodebuildFleet#compute_type}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.environmentType">environmentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#environment_type CodebuildFleet#environment_type}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.fleetProxyConfiguration">fleetProxyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration">CodebuildFleetFleetProxyConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#fleet_proxy_configuration CodebuildFleet#fleet_proxy_configuration}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.fleetServiceRole">fleetServiceRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#fleet_service_role CodebuildFleet#fleet_service_role}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.fleetVpcConfig">fleetVpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig">CodebuildFleetFleetVpcConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#fleet_vpc_config CodebuildFleet#fleet_vpc_config}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.imageId">imageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#image_id CodebuildFleet#image_id}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#name CodebuildFleet#name}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.overflowBehavior">overflowBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#overflow_behavior CodebuildFleet#overflow_behavior}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.scalingConfiguration">scalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#scaling_configuration CodebuildFleet#scaling_configuration}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#tags CodebuildFleet#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `baseCapacity`<sup>Optional</sup> <a name="baseCapacity" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.baseCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#base_capacity CodebuildFleet#base_capacity}.

---

##### `computeConfiguration`<sup>Optional</sup> <a name="computeConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.computeConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#compute_configuration CodebuildFleet#compute_configuration}.

---

##### `computeType`<sup>Optional</sup> <a name="computeType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.computeType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#compute_type CodebuildFleet#compute_type}.

---

##### `environmentType`<sup>Optional</sup> <a name="environmentType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.environmentType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#environment_type CodebuildFleet#environment_type}.

---

##### `fleetProxyConfiguration`<sup>Optional</sup> <a name="fleetProxyConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.fleetProxyConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration">CodebuildFleetFleetProxyConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#fleet_proxy_configuration CodebuildFleet#fleet_proxy_configuration}.

---

##### `fleetServiceRole`<sup>Optional</sup> <a name="fleetServiceRole" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.fleetServiceRole"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#fleet_service_role CodebuildFleet#fleet_service_role}.

---

##### `fleetVpcConfig`<sup>Optional</sup> <a name="fleetVpcConfig" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.fleetVpcConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig">CodebuildFleetFleetVpcConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#fleet_vpc_config CodebuildFleet#fleet_vpc_config}.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.imageId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#image_id CodebuildFleet#image_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#name CodebuildFleet#name}.

---

##### `overflowBehavior`<sup>Optional</sup> <a name="overflowBehavior" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.overflowBehavior"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#overflow_behavior CodebuildFleet#overflow_behavior}.

---

##### `scalingConfiguration`<sup>Optional</sup> <a name="scalingConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.scalingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#scaling_configuration CodebuildFleet#scaling_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#tags CodebuildFleet#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putComputeConfiguration">putComputeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putFleetProxyConfiguration">putFleetProxyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putFleetVpcConfig">putFleetVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putScalingConfiguration">putScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetBaseCapacity">resetBaseCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetComputeConfiguration">resetComputeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetComputeType">resetComputeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetEnvironmentType">resetEnvironmentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetFleetProxyConfiguration">resetFleetProxyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetFleetServiceRole">resetFleetServiceRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetFleetVpcConfig">resetFleetVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetImageId">resetImageId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetOverflowBehavior">resetOverflowBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetScalingConfiguration">resetScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putComputeConfiguration` <a name="putComputeConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putComputeConfiguration"></a>

```java
public void putComputeConfiguration(CodebuildFleetComputeConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putComputeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a>

---

##### `putFleetProxyConfiguration` <a name="putFleetProxyConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putFleetProxyConfiguration"></a>

```java
public void putFleetProxyConfiguration(CodebuildFleetFleetProxyConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putFleetProxyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration">CodebuildFleetFleetProxyConfiguration</a>

---

##### `putFleetVpcConfig` <a name="putFleetVpcConfig" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putFleetVpcConfig"></a>

```java
public void putFleetVpcConfig(CodebuildFleetFleetVpcConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putFleetVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig">CodebuildFleetFleetVpcConfig</a>

---

##### `putScalingConfiguration` <a name="putScalingConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putScalingConfiguration"></a>

```java
public void putScalingConfiguration(CodebuildFleetScalingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CodebuildFleetTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a>>

---

##### `resetBaseCapacity` <a name="resetBaseCapacity" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetBaseCapacity"></a>

```java
public void resetBaseCapacity()
```

##### `resetComputeConfiguration` <a name="resetComputeConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetComputeConfiguration"></a>

```java
public void resetComputeConfiguration()
```

##### `resetComputeType` <a name="resetComputeType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetComputeType"></a>

```java
public void resetComputeType()
```

##### `resetEnvironmentType` <a name="resetEnvironmentType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetEnvironmentType"></a>

```java
public void resetEnvironmentType()
```

##### `resetFleetProxyConfiguration` <a name="resetFleetProxyConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetFleetProxyConfiguration"></a>

```java
public void resetFleetProxyConfiguration()
```

##### `resetFleetServiceRole` <a name="resetFleetServiceRole" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetFleetServiceRole"></a>

```java
public void resetFleetServiceRole()
```

##### `resetFleetVpcConfig` <a name="resetFleetVpcConfig" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetFleetVpcConfig"></a>

```java
public void resetFleetVpcConfig()
```

##### `resetImageId` <a name="resetImageId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetImageId"></a>

```java
public void resetImageId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetName"></a>

```java
public void resetName()
```

##### `resetOverflowBehavior` <a name="resetOverflowBehavior" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetOverflowBehavior"></a>

```java
public void resetOverflowBehavior()
```

##### `resetScalingConfiguration` <a name="resetScalingConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetScalingConfiguration"></a>

```java
public void resetScalingConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CodebuildFleet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.isConstruct"></a>

```java
import io.cdktn.providers.awscc.codebuild_fleet.CodebuildFleet;

CodebuildFleet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.codebuild_fleet.CodebuildFleet;

CodebuildFleet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.codebuild_fleet.CodebuildFleet;

CodebuildFleet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.codebuild_fleet.CodebuildFleet;

CodebuildFleet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CodebuildFleet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CodebuildFleet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CodebuildFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CodebuildFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CodebuildFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.computeConfiguration">computeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference">CodebuildFleetComputeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetProxyConfiguration">fleetProxyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference">CodebuildFleetFleetProxyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetVpcConfig">fleetVpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference">CodebuildFleetFleetVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.scalingConfiguration">scalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference">CodebuildFleetScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList">CodebuildFleetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.baseCapacityInput">baseCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.computeConfigurationInput">computeConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.computeTypeInput">computeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.environmentTypeInput">environmentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetProxyConfigurationInput">fleetProxyConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration">CodebuildFleetFleetProxyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetServiceRoleInput">fleetServiceRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetVpcConfigInput">fleetVpcConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig">CodebuildFleetFleetVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.imageIdInput">imageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.overflowBehaviorInput">overflowBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.scalingConfigurationInput">scalingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.baseCapacity">baseCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.computeType">computeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.environmentType">environmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetServiceRole">fleetServiceRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.overflowBehavior">overflowBehavior</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `computeConfiguration`<sup>Required</sup> <a name="computeConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.computeConfiguration"></a>

```java
public CodebuildFleetComputeConfigurationOutputReference getComputeConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference">CodebuildFleetComputeConfigurationOutputReference</a>

---

##### `fleetProxyConfiguration`<sup>Required</sup> <a name="fleetProxyConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetProxyConfiguration"></a>

```java
public CodebuildFleetFleetProxyConfigurationOutputReference getFleetProxyConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference">CodebuildFleetFleetProxyConfigurationOutputReference</a>

---

##### `fleetVpcConfig`<sup>Required</sup> <a name="fleetVpcConfig" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetVpcConfig"></a>

```java
public CodebuildFleetFleetVpcConfigOutputReference getFleetVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference">CodebuildFleetFleetVpcConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `scalingConfiguration`<sup>Required</sup> <a name="scalingConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.scalingConfiguration"></a>

```java
public CodebuildFleetScalingConfigurationOutputReference getScalingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference">CodebuildFleetScalingConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.tags"></a>

```java
public CodebuildFleetTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList">CodebuildFleetTagsList</a>

---

##### `baseCapacityInput`<sup>Optional</sup> <a name="baseCapacityInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.baseCapacityInput"></a>

```java
public java.lang.Number getBaseCapacityInput();
```

- *Type:* java.lang.Number

---

##### `computeConfigurationInput`<sup>Optional</sup> <a name="computeConfigurationInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.computeConfigurationInput"></a>

```java
public IResolvable|CodebuildFleetComputeConfiguration getComputeConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a>

---

##### `computeTypeInput`<sup>Optional</sup> <a name="computeTypeInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.computeTypeInput"></a>

```java
public java.lang.String getComputeTypeInput();
```

- *Type:* java.lang.String

---

##### `environmentTypeInput`<sup>Optional</sup> <a name="environmentTypeInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.environmentTypeInput"></a>

```java
public java.lang.String getEnvironmentTypeInput();
```

- *Type:* java.lang.String

---

##### `fleetProxyConfigurationInput`<sup>Optional</sup> <a name="fleetProxyConfigurationInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetProxyConfigurationInput"></a>

```java
public IResolvable|CodebuildFleetFleetProxyConfiguration getFleetProxyConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration">CodebuildFleetFleetProxyConfiguration</a>

---

##### `fleetServiceRoleInput`<sup>Optional</sup> <a name="fleetServiceRoleInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetServiceRoleInput"></a>

```java
public java.lang.String getFleetServiceRoleInput();
```

- *Type:* java.lang.String

---

##### `fleetVpcConfigInput`<sup>Optional</sup> <a name="fleetVpcConfigInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetVpcConfigInput"></a>

```java
public IResolvable|CodebuildFleetFleetVpcConfig getFleetVpcConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig">CodebuildFleetFleetVpcConfig</a>

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.imageIdInput"></a>

```java
public java.lang.String getImageIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `overflowBehaviorInput`<sup>Optional</sup> <a name="overflowBehaviorInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.overflowBehaviorInput"></a>

```java
public java.lang.String getOverflowBehaviorInput();
```

- *Type:* java.lang.String

---

##### `scalingConfigurationInput`<sup>Optional</sup> <a name="scalingConfigurationInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.scalingConfigurationInput"></a>

```java
public IResolvable|CodebuildFleetScalingConfiguration getScalingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CodebuildFleetTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a>>

---

##### `baseCapacity`<sup>Required</sup> <a name="baseCapacity" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.baseCapacity"></a>

```java
public java.lang.Number getBaseCapacity();
```

- *Type:* java.lang.Number

---

##### `computeType`<sup>Required</sup> <a name="computeType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.computeType"></a>

```java
public java.lang.String getComputeType();
```

- *Type:* java.lang.String

---

##### `environmentType`<sup>Required</sup> <a name="environmentType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.environmentType"></a>

```java
public java.lang.String getEnvironmentType();
```

- *Type:* java.lang.String

---

##### `fleetServiceRole`<sup>Required</sup> <a name="fleetServiceRole" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetServiceRole"></a>

```java
public java.lang.String getFleetServiceRole();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `overflowBehavior`<sup>Required</sup> <a name="overflowBehavior" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.overflowBehavior"></a>

```java
public java.lang.String getOverflowBehavior();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CodebuildFleetComputeConfiguration <a name="CodebuildFleetComputeConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.codebuild_fleet.CodebuildFleetComputeConfiguration;

CodebuildFleetComputeConfiguration.builder()
//  .disk(java.lang.Number)
//  .instanceType(java.lang.String)
//  .machineType(java.lang.String)
//  .memory(java.lang.Number)
//  .vCpu(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.disk">disk</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#disk CodebuildFleet#disk}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#instance_type CodebuildFleet#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.machineType">machineType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#machine_type CodebuildFleet#machine_type}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.memory">memory</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#memory CodebuildFleet#memory}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.vCpu">vCpu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#v_cpu CodebuildFleet#v_cpu}. |

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.disk"></a>

```java
public java.lang.Number getDisk();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#disk CodebuildFleet#disk}.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#instance_type CodebuildFleet#instance_type}.

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#machine_type CodebuildFleet#machine_type}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.memory"></a>

```java
public java.lang.Number getMemory();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#memory CodebuildFleet#memory}.

---

##### `vCpu`<sup>Optional</sup> <a name="vCpu" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.vCpu"></a>

```java
public java.lang.Number getVCpu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#v_cpu CodebuildFleet#v_cpu}.

---

### CodebuildFleetConfig <a name="CodebuildFleetConfig" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.codebuild_fleet.CodebuildFleetConfig;

CodebuildFleetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .baseCapacity(java.lang.Number)
//  .computeConfiguration(CodebuildFleetComputeConfiguration)
//  .computeType(java.lang.String)
//  .environmentType(java.lang.String)
//  .fleetProxyConfiguration(CodebuildFleetFleetProxyConfiguration)
//  .fleetServiceRole(java.lang.String)
//  .fleetVpcConfig(CodebuildFleetFleetVpcConfig)
//  .imageId(java.lang.String)
//  .name(java.lang.String)
//  .overflowBehavior(java.lang.String)
//  .scalingConfiguration(CodebuildFleetScalingConfiguration)
//  .tags(IResolvable|java.util.List<CodebuildFleetTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.baseCapacity">baseCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#base_capacity CodebuildFleet#base_capacity}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.computeConfiguration">computeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#compute_configuration CodebuildFleet#compute_configuration}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.computeType">computeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#compute_type CodebuildFleet#compute_type}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.environmentType">environmentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#environment_type CodebuildFleet#environment_type}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.fleetProxyConfiguration">fleetProxyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration">CodebuildFleetFleetProxyConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#fleet_proxy_configuration CodebuildFleet#fleet_proxy_configuration}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.fleetServiceRole">fleetServiceRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#fleet_service_role CodebuildFleet#fleet_service_role}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.fleetVpcConfig">fleetVpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig">CodebuildFleetFleetVpcConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#fleet_vpc_config CodebuildFleet#fleet_vpc_config}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.imageId">imageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#image_id CodebuildFleet#image_id}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#name CodebuildFleet#name}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.overflowBehavior">overflowBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#overflow_behavior CodebuildFleet#overflow_behavior}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.scalingConfiguration">scalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#scaling_configuration CodebuildFleet#scaling_configuration}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#tags CodebuildFleet#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `baseCapacity`<sup>Optional</sup> <a name="baseCapacity" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.baseCapacity"></a>

```java
public java.lang.Number getBaseCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#base_capacity CodebuildFleet#base_capacity}.

---

##### `computeConfiguration`<sup>Optional</sup> <a name="computeConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.computeConfiguration"></a>

```java
public CodebuildFleetComputeConfiguration getComputeConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#compute_configuration CodebuildFleet#compute_configuration}.

---

##### `computeType`<sup>Optional</sup> <a name="computeType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.computeType"></a>

```java
public java.lang.String getComputeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#compute_type CodebuildFleet#compute_type}.

---

##### `environmentType`<sup>Optional</sup> <a name="environmentType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.environmentType"></a>

```java
public java.lang.String getEnvironmentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#environment_type CodebuildFleet#environment_type}.

---

##### `fleetProxyConfiguration`<sup>Optional</sup> <a name="fleetProxyConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.fleetProxyConfiguration"></a>

```java
public CodebuildFleetFleetProxyConfiguration getFleetProxyConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration">CodebuildFleetFleetProxyConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#fleet_proxy_configuration CodebuildFleet#fleet_proxy_configuration}.

---

##### `fleetServiceRole`<sup>Optional</sup> <a name="fleetServiceRole" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.fleetServiceRole"></a>

```java
public java.lang.String getFleetServiceRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#fleet_service_role CodebuildFleet#fleet_service_role}.

---

##### `fleetVpcConfig`<sup>Optional</sup> <a name="fleetVpcConfig" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.fleetVpcConfig"></a>

```java
public CodebuildFleetFleetVpcConfig getFleetVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig">CodebuildFleetFleetVpcConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#fleet_vpc_config CodebuildFleet#fleet_vpc_config}.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#image_id CodebuildFleet#image_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#name CodebuildFleet#name}.

---

##### `overflowBehavior`<sup>Optional</sup> <a name="overflowBehavior" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.overflowBehavior"></a>

```java
public java.lang.String getOverflowBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#overflow_behavior CodebuildFleet#overflow_behavior}.

---

##### `scalingConfiguration`<sup>Optional</sup> <a name="scalingConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.scalingConfiguration"></a>

```java
public CodebuildFleetScalingConfiguration getScalingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#scaling_configuration CodebuildFleet#scaling_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CodebuildFleetTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#tags CodebuildFleet#tags}.

---

### CodebuildFleetFleetProxyConfiguration <a name="CodebuildFleetFleetProxyConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.codebuild_fleet.CodebuildFleetFleetProxyConfiguration;

CodebuildFleetFleetProxyConfiguration.builder()
//  .defaultBehavior(java.lang.String)
//  .orderedProxyRules(IResolvable|java.util.List<CodebuildFleetFleetProxyConfigurationOrderedProxyRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration.property.defaultBehavior">defaultBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#default_behavior CodebuildFleet#default_behavior}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration.property.orderedProxyRules">orderedProxyRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules">CodebuildFleetFleetProxyConfigurationOrderedProxyRules</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#ordered_proxy_rules CodebuildFleet#ordered_proxy_rules}. |

---

##### `defaultBehavior`<sup>Optional</sup> <a name="defaultBehavior" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration.property.defaultBehavior"></a>

```java
public java.lang.String getDefaultBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#default_behavior CodebuildFleet#default_behavior}.

---

##### `orderedProxyRules`<sup>Optional</sup> <a name="orderedProxyRules" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration.property.orderedProxyRules"></a>

```java
public IResolvable|java.util.List<CodebuildFleetFleetProxyConfigurationOrderedProxyRules> getOrderedProxyRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules">CodebuildFleetFleetProxyConfigurationOrderedProxyRules</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#ordered_proxy_rules CodebuildFleet#ordered_proxy_rules}.

---

### CodebuildFleetFleetProxyConfigurationOrderedProxyRules <a name="CodebuildFleetFleetProxyConfigurationOrderedProxyRules" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.codebuild_fleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules;

CodebuildFleetFleetProxyConfigurationOrderedProxyRules.builder()
//  .effect(java.lang.String)
//  .entities(java.util.List<java.lang.String>)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules.property.effect">effect</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#effect CodebuildFleet#effect}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules.property.entities">entities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#entities CodebuildFleet#entities}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#type CodebuildFleet#type}. |

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#effect CodebuildFleet#effect}.

---

##### `entities`<sup>Optional</sup> <a name="entities" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules.property.entities"></a>

```java
public java.util.List<java.lang.String> getEntities();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#entities CodebuildFleet#entities}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#type CodebuildFleet#type}.

---

### CodebuildFleetFleetVpcConfig <a name="CodebuildFleetFleetVpcConfig" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.codebuild_fleet.CodebuildFleetFleetVpcConfig;

CodebuildFleetFleetVpcConfig.builder()
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnets(java.util.List<java.lang.String>)
//  .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#security_group_ids CodebuildFleet#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#subnets CodebuildFleet#subnets}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#vpc_id CodebuildFleet#vpc_id}. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#security_group_ids CodebuildFleet#security_group_ids}.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#subnets CodebuildFleet#subnets}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#vpc_id CodebuildFleet#vpc_id}.

---

### CodebuildFleetScalingConfiguration <a name="CodebuildFleetScalingConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.codebuild_fleet.CodebuildFleetScalingConfiguration;

CodebuildFleetScalingConfiguration.builder()
//  .maxCapacity(java.lang.Number)
//  .scalingType(java.lang.String)
//  .targetTrackingScalingConfigs(IResolvable|java.util.List<CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#max_capacity CodebuildFleet#max_capacity}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration.property.scalingType">scalingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#scaling_type CodebuildFleet#scaling_type}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration.property.targetTrackingScalingConfigs">targetTrackingScalingConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#target_tracking_scaling_configs CodebuildFleet#target_tracking_scaling_configs}. |

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#max_capacity CodebuildFleet#max_capacity}.

---

##### `scalingType`<sup>Optional</sup> <a name="scalingType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration.property.scalingType"></a>

```java
public java.lang.String getScalingType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#scaling_type CodebuildFleet#scaling_type}.

---

##### `targetTrackingScalingConfigs`<sup>Optional</sup> <a name="targetTrackingScalingConfigs" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration.property.targetTrackingScalingConfigs"></a>

```java
public IResolvable|java.util.List<CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs> getTargetTrackingScalingConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#target_tracking_scaling_configs CodebuildFleet#target_tracking_scaling_configs}.

---

### CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs <a name="CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs.Initializer"></a>

```java
import io.cdktn.providers.awscc.codebuild_fleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs;

CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs.builder()
//  .metricType(java.lang.String)
//  .targetValue(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs.property.metricType">metricType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#metric_type CodebuildFleet#metric_type}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs.property.targetValue">targetValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#target_value CodebuildFleet#target_value}. |

---

##### `metricType`<sup>Optional</sup> <a name="metricType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs.property.metricType"></a>

```java
public java.lang.String getMetricType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#metric_type CodebuildFleet#metric_type}.

---

##### `targetValue`<sup>Optional</sup> <a name="targetValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs.property.targetValue"></a>

```java
public java.lang.Number getTargetValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#target_value CodebuildFleet#target_value}.

---

### CodebuildFleetTags <a name="CodebuildFleetTags" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.codebuild_fleet.CodebuildFleetTags;

CodebuildFleetTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#key CodebuildFleet#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 255 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#value CodebuildFleet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CodebuildFleetComputeConfigurationOutputReference <a name="CodebuildFleetComputeConfigurationOutputReference" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.codebuild_fleet.CodebuildFleetComputeConfigurationOutputReference;

new CodebuildFleetComputeConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetDisk">resetDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetVCpu">resetVCpu</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisk` <a name="resetDisk" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetDisk"></a>

```java
public void resetDisk()
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetMachineType"></a>

```java
public void resetMachineType()
```

##### `resetMemory` <a name="resetMemory" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetMemory"></a>

```java
public void resetMemory()
```

##### `resetVCpu` <a name="resetVCpu" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetVCpu"></a>

```java
public void resetVCpu()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.diskInput">diskInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.memoryInput">memoryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.vCpuInput">vCpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.disk">disk</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.memory">memory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.vCpu">vCpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.diskInput"></a>

```java
public java.lang.Number getDiskInput();
```

- *Type:* java.lang.Number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.memoryInput"></a>

```java
public java.lang.Number getMemoryInput();
```

- *Type:* java.lang.Number

---

##### `vCpuInput`<sup>Optional</sup> <a name="vCpuInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.vCpuInput"></a>

```java
public java.lang.Number getVCpuInput();
```

- *Type:* java.lang.Number

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.disk"></a>

```java
public java.lang.Number getDisk();
```

- *Type:* java.lang.Number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.memory"></a>

```java
public java.lang.Number getMemory();
```

- *Type:* java.lang.Number

---

##### `vCpu`<sup>Required</sup> <a name="vCpu" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.vCpu"></a>

```java
public java.lang.Number getVCpu();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|CodebuildFleetComputeConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a>

---


### CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList <a name="CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.codebuild_fleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList;

new CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.get"></a>

```java
public CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules">CodebuildFleetFleetProxyConfigurationOrderedProxyRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CodebuildFleetFleetProxyConfigurationOrderedProxyRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules">CodebuildFleetFleetProxyConfigurationOrderedProxyRules</a>>

---


### CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference <a name="CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.codebuild_fleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference;

new CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resetEffect">resetEffect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resetEntities">resetEntities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEffect` <a name="resetEffect" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resetEffect"></a>

```java
public void resetEffect()
```

##### `resetEntities` <a name="resetEntities" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resetEntities"></a>

```java
public void resetEntities()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.effectInput">effectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.entitiesInput">entitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.effect">effect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.entities">entities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules">CodebuildFleetFleetProxyConfigurationOrderedProxyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.effectInput"></a>

```java
public java.lang.String getEffectInput();
```

- *Type:* java.lang.String

---

##### `entitiesInput`<sup>Optional</sup> <a name="entitiesInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.entitiesInput"></a>

```java
public java.util.List<java.lang.String> getEntitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.entities"></a>

```java
public java.util.List<java.lang.String> getEntities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|CodebuildFleetFleetProxyConfigurationOrderedProxyRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules">CodebuildFleetFleetProxyConfigurationOrderedProxyRules</a>

---


### CodebuildFleetFleetProxyConfigurationOutputReference <a name="CodebuildFleetFleetProxyConfigurationOutputReference" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.codebuild_fleet.CodebuildFleetFleetProxyConfigurationOutputReference;

new CodebuildFleetFleetProxyConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.putOrderedProxyRules">putOrderedProxyRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.resetDefaultBehavior">resetDefaultBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.resetOrderedProxyRules">resetOrderedProxyRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOrderedProxyRules` <a name="putOrderedProxyRules" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.putOrderedProxyRules"></a>

```java
public void putOrderedProxyRules(IResolvable|java.util.List<CodebuildFleetFleetProxyConfigurationOrderedProxyRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.putOrderedProxyRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules">CodebuildFleetFleetProxyConfigurationOrderedProxyRules</a>>

---

##### `resetDefaultBehavior` <a name="resetDefaultBehavior" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.resetDefaultBehavior"></a>

```java
public void resetDefaultBehavior()
```

##### `resetOrderedProxyRules` <a name="resetOrderedProxyRules" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.resetOrderedProxyRules"></a>

```java
public void resetOrderedProxyRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.orderedProxyRules">orderedProxyRules</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList">CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.defaultBehaviorInput">defaultBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.orderedProxyRulesInput">orderedProxyRulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules">CodebuildFleetFleetProxyConfigurationOrderedProxyRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.defaultBehavior">defaultBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration">CodebuildFleetFleetProxyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `orderedProxyRules`<sup>Required</sup> <a name="orderedProxyRules" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.orderedProxyRules"></a>

```java
public CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList getOrderedProxyRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList">CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList</a>

---

##### `defaultBehaviorInput`<sup>Optional</sup> <a name="defaultBehaviorInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.defaultBehaviorInput"></a>

```java
public java.lang.String getDefaultBehaviorInput();
```

- *Type:* java.lang.String

---

##### `orderedProxyRulesInput`<sup>Optional</sup> <a name="orderedProxyRulesInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.orderedProxyRulesInput"></a>

```java
public IResolvable|java.util.List<CodebuildFleetFleetProxyConfigurationOrderedProxyRules> getOrderedProxyRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules">CodebuildFleetFleetProxyConfigurationOrderedProxyRules</a>>

---

##### `defaultBehavior`<sup>Required</sup> <a name="defaultBehavior" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.defaultBehavior"></a>

```java
public java.lang.String getDefaultBehavior();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|CodebuildFleetFleetProxyConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration">CodebuildFleetFleetProxyConfiguration</a>

---


### CodebuildFleetFleetVpcConfigOutputReference <a name="CodebuildFleetFleetVpcConfigOutputReference" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.codebuild_fleet.CodebuildFleetFleetVpcConfigOutputReference;

new CodebuildFleetFleetVpcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.resetSubnets"></a>

```java
public void resetSubnets()
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.resetVpcId"></a>

```java
public void resetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig">CodebuildFleetFleetVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|CodebuildFleetFleetVpcConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig">CodebuildFleetFleetVpcConfig</a>

---


### CodebuildFleetScalingConfigurationOutputReference <a name="CodebuildFleetScalingConfigurationOutputReference" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.codebuild_fleet.CodebuildFleetScalingConfigurationOutputReference;

new CodebuildFleetScalingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.putTargetTrackingScalingConfigs">putTargetTrackingScalingConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resetScalingType">resetScalingType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resetTargetTrackingScalingConfigs">resetTargetTrackingScalingConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetTrackingScalingConfigs` <a name="putTargetTrackingScalingConfigs" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.putTargetTrackingScalingConfigs"></a>

```java
public void putTargetTrackingScalingConfigs(IResolvable|java.util.List<CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.putTargetTrackingScalingConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>>

---

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resetMaxCapacity"></a>

```java
public void resetMaxCapacity()
```

##### `resetScalingType` <a name="resetScalingType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resetScalingType"></a>

```java
public void resetScalingType()
```

##### `resetTargetTrackingScalingConfigs` <a name="resetTargetTrackingScalingConfigs" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resetTargetTrackingScalingConfigs"></a>

```java
public void resetTargetTrackingScalingConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.targetTrackingScalingConfigs">targetTrackingScalingConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.maxCapacityInput">maxCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.scalingTypeInput">scalingTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.targetTrackingScalingConfigsInput">targetTrackingScalingConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.scalingType">scalingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetTrackingScalingConfigs`<sup>Required</sup> <a name="targetTrackingScalingConfigs" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.targetTrackingScalingConfigs"></a>

```java
public CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList getTargetTrackingScalingConfigs();
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList</a>

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.maxCapacityInput"></a>

```java
public java.lang.Number getMaxCapacityInput();
```

- *Type:* java.lang.Number

---

##### `scalingTypeInput`<sup>Optional</sup> <a name="scalingTypeInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.scalingTypeInput"></a>

```java
public java.lang.String getScalingTypeInput();
```

- *Type:* java.lang.String

---

##### `targetTrackingScalingConfigsInput`<sup>Optional</sup> <a name="targetTrackingScalingConfigsInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.targetTrackingScalingConfigsInput"></a>

```java
public IResolvable|java.util.List<CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs> getTargetTrackingScalingConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>>

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

---

##### `scalingType`<sup>Required</sup> <a name="scalingType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.scalingType"></a>

```java
public java.lang.String getScalingType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|CodebuildFleetScalingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a>

---


### CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList <a name="CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.codebuild_fleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList;

new CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.get"></a>

```java
public CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>>

---


### CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference <a name="CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.codebuild_fleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference;

new CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resetMetricType">resetMetricType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resetTargetValue">resetTargetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricType` <a name="resetMetricType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resetMetricType"></a>

```java
public void resetMetricType()
```

##### `resetTargetValue` <a name="resetTargetValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resetTargetValue"></a>

```java
public void resetTargetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.metricTypeInput">metricTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.targetValueInput">targetValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.metricType">metricType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.targetValue">targetValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricTypeInput`<sup>Optional</sup> <a name="metricTypeInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.metricTypeInput"></a>

```java
public java.lang.String getMetricTypeInput();
```

- *Type:* java.lang.String

---

##### `targetValueInput`<sup>Optional</sup> <a name="targetValueInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.targetValueInput"></a>

```java
public java.lang.Number getTargetValueInput();
```

- *Type:* java.lang.Number

---

##### `metricType`<sup>Required</sup> <a name="metricType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.metricType"></a>

```java
public java.lang.String getMetricType();
```

- *Type:* java.lang.String

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.targetValue"></a>

```java
public java.lang.Number getTargetValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>

---


### CodebuildFleetTagsList <a name="CodebuildFleetTagsList" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.codebuild_fleet.CodebuildFleetTagsList;

new CodebuildFleetTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.get"></a>

```java
public CodebuildFleetTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CodebuildFleetTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a>>

---


### CodebuildFleetTagsOutputReference <a name="CodebuildFleetTagsOutputReference" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.codebuild_fleet.CodebuildFleetTagsOutputReference;

new CodebuildFleetTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CodebuildFleetTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a>

---



