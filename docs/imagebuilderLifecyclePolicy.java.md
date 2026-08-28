# `imagebuilderLifecyclePolicy` Submodule <a name="`imagebuilderLifecyclePolicy` Submodule" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderLifecyclePolicy <a name="ImagebuilderLifecyclePolicy" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy awscc_imagebuilder_lifecycle_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicy;

ImagebuilderLifecyclePolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .executionRole(java.lang.String)
    .name(java.lang.String)
    .policyDetails(IResolvable|java.util.List<ImagebuilderLifecyclePolicyPolicyDetails>)
    .resourceSelection(ImagebuilderLifecyclePolicyResourceSelection)
    .resourceType(java.lang.String)
//  .description(java.lang.String)
//  .status(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.executionRole">executionRole</a></code> | <code>java.lang.String</code> | The execution role of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.policyDetails">policyDetails</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>></code> | The policy details of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.resourceSelection">resourceSelection</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a></code> | The resource selection of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.resourceType">resourceType</a></code> | <code>java.lang.String</code> | The resource type of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | The status of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The tags associated with the lifecycle policy. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.executionRole"></a>

- *Type:* java.lang.String

The execution role of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#execution_role ImagebuilderLifecyclePolicy#execution_role}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}

---

##### `policyDetails`<sup>Required</sup> <a name="policyDetails" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.policyDetails"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>>

The policy details of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#policy_details ImagebuilderLifecyclePolicy#policy_details}

---

##### `resourceSelection`<sup>Required</sup> <a name="resourceSelection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.resourceSelection"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>

The resource selection of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#resource_selection ImagebuilderLifecyclePolicy#resource_selection}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.resourceType"></a>

- *Type:* java.lang.String

The resource type of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#resource_type ImagebuilderLifecyclePolicy#resource_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#description ImagebuilderLifecyclePolicy#description}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.status"></a>

- *Type:* java.lang.String

The status of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#status ImagebuilderLifecyclePolicy#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The tags associated with the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#tags ImagebuilderLifecyclePolicy#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putPolicyDetails">putPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putResourceSelection">putResourceSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPolicyDetails` <a name="putPolicyDetails" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putPolicyDetails"></a>

```java
public void putPolicyDetails(IResolvable|java.util.List<ImagebuilderLifecyclePolicyPolicyDetails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putPolicyDetails.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>>

---

##### `putResourceSelection` <a name="putResourceSelection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putResourceSelection"></a>

```java
public void putResourceSelection(ImagebuilderLifecyclePolicyResourceSelection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putResourceSelection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ImagebuilderLifecyclePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isConstruct"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicy;

ImagebuilderLifecyclePolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicy;

ImagebuilderLifecyclePolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicy;

ImagebuilderLifecyclePolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicy;

ImagebuilderLifecyclePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ImagebuilderLifecyclePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ImagebuilderLifecyclePolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ImagebuilderLifecyclePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ImagebuilderLifecyclePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ImagebuilderLifecyclePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetails">policyDetails</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList">ImagebuilderLifecyclePolicyPolicyDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelection">resourceSelection</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference">ImagebuilderLifecyclePolicyResourceSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRoleInput">executionRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetailsInput">policyDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelectionInput">resourceSelectionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `policyDetails`<sup>Required</sup> <a name="policyDetails" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetails"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailsList getPolicyDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList">ImagebuilderLifecyclePolicyPolicyDetailsList</a>

---

##### `resourceSelection`<sup>Required</sup> <a name="resourceSelection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelection"></a>

```java
public ImagebuilderLifecyclePolicyResourceSelectionOutputReference getResourceSelection();
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference">ImagebuilderLifecyclePolicyResourceSelectionOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRoleInput"></a>

```java
public java.lang.String getExecutionRoleInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyDetailsInput`<sup>Optional</sup> <a name="policyDetailsInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetailsInput"></a>

```java
public IResolvable|java.util.List<ImagebuilderLifecyclePolicyPolicyDetails> getPolicyDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>>

---

##### `resourceSelectionInput`<sup>Optional</sup> <a name="resourceSelectionInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelectionInput"></a>

```java
public IResolvable|ImagebuilderLifecyclePolicyResourceSelection getResourceSelectionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderLifecyclePolicyConfig <a name="ImagebuilderLifecyclePolicyConfig" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyConfig;

ImagebuilderLifecyclePolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .executionRole(java.lang.String)
    .name(java.lang.String)
    .policyDetails(IResolvable|java.util.List<ImagebuilderLifecyclePolicyPolicyDetails>)
    .resourceSelection(ImagebuilderLifecyclePolicyResourceSelection)
    .resourceType(java.lang.String)
//  .description(java.lang.String)
//  .status(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | The execution role of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.policyDetails">policyDetails</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>></code> | The policy details of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceSelection">resourceSelection</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a></code> | The resource selection of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | The resource type of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.status">status</a></code> | <code>java.lang.String</code> | The status of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The tags associated with the lifecycle policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

The execution role of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#execution_role ImagebuilderLifecyclePolicy#execution_role}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}

---

##### `policyDetails`<sup>Required</sup> <a name="policyDetails" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.policyDetails"></a>

```java
public IResolvable|java.util.List<ImagebuilderLifecyclePolicyPolicyDetails> getPolicyDetails();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>>

The policy details of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#policy_details ImagebuilderLifecyclePolicy#policy_details}

---

##### `resourceSelection`<sup>Required</sup> <a name="resourceSelection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceSelection"></a>

```java
public ImagebuilderLifecyclePolicyResourceSelection getResourceSelection();
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>

The resource selection of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#resource_selection ImagebuilderLifecyclePolicy#resource_selection}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

The resource type of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#resource_type ImagebuilderLifecyclePolicy#resource_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#description ImagebuilderLifecyclePolicy#description}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

The status of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#status ImagebuilderLifecyclePolicy#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The tags associated with the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#tags ImagebuilderLifecyclePolicy#tags}

---

### ImagebuilderLifecyclePolicyPolicyDetails <a name="ImagebuilderLifecyclePolicyPolicyDetails" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetails;

ImagebuilderLifecyclePolicyPolicyDetails.builder()
    .action(ImagebuilderLifecyclePolicyPolicyDetailsAction)
    .filter(ImagebuilderLifecyclePolicyPolicyDetailsFilter)
//  .exclusionRules(ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a></code> | The action of the policy detail. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a></code> | The filters to apply of the policy detail. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.exclusionRules">exclusionRules</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a></code> | The exclusion rules to apply of the policy detail. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.action"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailsAction getAction();
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a>

The action of the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#action ImagebuilderLifecyclePolicy#action}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.filter"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailsFilter getFilter();
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a>

The filters to apply of the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#filter ImagebuilderLifecyclePolicy#filter}

---

##### `exclusionRules`<sup>Optional</sup> <a name="exclusionRules" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.exclusionRules"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules getExclusionRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a>

The exclusion rules to apply of the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#exclusion_rules ImagebuilderLifecyclePolicy#exclusion_rules}

---

### ImagebuilderLifecyclePolicyPolicyDetailsAction <a name="ImagebuilderLifecyclePolicyPolicyDetailsAction" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailsAction;

ImagebuilderLifecyclePolicyPolicyDetailsAction.builder()
    .type(java.lang.String)
//  .includeResources(ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction.property.type">type</a></code> | <code>java.lang.String</code> | The action type of the policy detail. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction.property.includeResources">includeResources</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a></code> | The included resources of the policy detail. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The action type of the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#type ImagebuilderLifecyclePolicy#type}

---

##### `includeResources`<sup>Optional</sup> <a name="includeResources" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction.property.includeResources"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources getIncludeResources();
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a>

The included resources of the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#include_resources ImagebuilderLifecyclePolicy#include_resources}

---

### ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources <a name="ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources;

ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.builder()
//  .amis(java.lang.Boolean|IResolvable)
//  .containers(java.lang.Boolean|IResolvable)
//  .snapshots(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.amis">amis</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Use to configure lifecycle actions on AMIs. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.containers">containers</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Use to configure lifecycle actions on containers. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.snapshots">snapshots</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Use to configure lifecycle actions on snapshots. |

---

##### `amis`<sup>Optional</sup> <a name="amis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.amis"></a>

```java
public java.lang.Boolean|IResolvable getAmis();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Use to configure lifecycle actions on AMIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#amis ImagebuilderLifecyclePolicy#amis}

---

##### `containers`<sup>Optional</sup> <a name="containers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.containers"></a>

```java
public java.lang.Boolean|IResolvable getContainers();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Use to configure lifecycle actions on containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#containers ImagebuilderLifecyclePolicy#containers}

---

##### `snapshots`<sup>Optional</sup> <a name="snapshots" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.snapshots"></a>

```java
public java.lang.Boolean|IResolvable getSnapshots();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Use to configure lifecycle actions on snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#snapshots ImagebuilderLifecyclePolicy#snapshots}

---

### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules;

ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.builder()
//  .amis(ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis)
//  .tagMap(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.property.amis">amis</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a></code> | The AMI exclusion rules for the policy detail. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.property.tagMap">tagMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The Image Builder tags to filter on. |

---

##### `amis`<sup>Optional</sup> <a name="amis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.property.amis"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis getAmis();
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a>

The AMI exclusion rules for the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#amis ImagebuilderLifecyclePolicy#amis}

---

##### `tagMap`<sup>Optional</sup> <a name="tagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.property.tagMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The Image Builder tags to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}

---

### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis;

ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.builder()
//  .isPublic(java.lang.Boolean|IResolvable)
//  .lastLaunched(ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched)
//  .regions(java.util.List<java.lang.String>)
//  .sharedAccounts(java.util.List<java.lang.String>)
//  .tagMap(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.isPublic">isPublic</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Use to apply lifecycle policy actions on whether the AMI is public. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.lastLaunched">lastLaunched</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a></code> | Use to apply lifecycle policy actions on AMIs launched before a certain time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | Use to apply lifecycle policy actions on AMIs distributed to a set of regions. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.sharedAccounts">sharedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | Use to apply lifecycle policy actions on AMIs shared with a set of regions. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.tagMap">tagMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The AMIs to select by tag. |

---

##### `isPublic`<sup>Optional</sup> <a name="isPublic" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.isPublic"></a>

```java
public java.lang.Boolean|IResolvable getIsPublic();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Use to apply lifecycle policy actions on whether the AMI is public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#is_public ImagebuilderLifecyclePolicy#is_public}

---

##### `lastLaunched`<sup>Optional</sup> <a name="lastLaunched" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.lastLaunched"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched getLastLaunched();
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a>

Use to apply lifecycle policy actions on AMIs launched before a certain time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#last_launched ImagebuilderLifecyclePolicy#last_launched}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

Use to apply lifecycle policy actions on AMIs distributed to a set of regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#regions ImagebuilderLifecyclePolicy#regions}

---

##### `sharedAccounts`<sup>Optional</sup> <a name="sharedAccounts" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.sharedAccounts"></a>

```java
public java.util.List<java.lang.String> getSharedAccounts();
```

- *Type:* java.util.List<java.lang.String>

Use to apply lifecycle policy actions on AMIs shared with a set of regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#shared_accounts ImagebuilderLifecyclePolicy#shared_accounts}

---

##### `tagMap`<sup>Optional</sup> <a name="tagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.tagMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The AMIs to select by tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}

---

### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched;

ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.builder()
//  .unit(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.property.unit">unit</a></code> | <code>java.lang.String</code> | The value's time unit. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.property.value">value</a></code> | <code>java.lang.Number</code> | The last launched value. |

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

The value's time unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#unit ImagebuilderLifecyclePolicy#unit}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

The last launched value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#value ImagebuilderLifecyclePolicy#value}

---

### ImagebuilderLifecyclePolicyPolicyDetailsFilter <a name="ImagebuilderLifecyclePolicyPolicyDetailsFilter" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailsFilter;

ImagebuilderLifecyclePolicyPolicyDetailsFilter.builder()
    .type(java.lang.String)
    .value(java.lang.Number)
//  .retainAtLeast(java.lang.Number)
//  .unit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.type">type</a></code> | <code>java.lang.String</code> | The filter type. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.value">value</a></code> | <code>java.lang.Number</code> | The filter value. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.retainAtLeast">retainAtLeast</a></code> | <code>java.lang.Number</code> | The minimum number of Image Builder resources to retain. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.unit">unit</a></code> | <code>java.lang.String</code> | The value's time unit. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The filter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#type ImagebuilderLifecyclePolicy#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

The filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#value ImagebuilderLifecyclePolicy#value}

---

##### `retainAtLeast`<sup>Optional</sup> <a name="retainAtLeast" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.retainAtLeast"></a>

```java
public java.lang.Number getRetainAtLeast();
```

- *Type:* java.lang.Number

The minimum number of Image Builder resources to retain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#retain_at_least ImagebuilderLifecyclePolicy#retain_at_least}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

The value's time unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#unit ImagebuilderLifecyclePolicy#unit}

---

### ImagebuilderLifecyclePolicyResourceSelection <a name="ImagebuilderLifecyclePolicyResourceSelection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyResourceSelection;

ImagebuilderLifecyclePolicyResourceSelection.builder()
//  .recipes(IResolvable|java.util.List<ImagebuilderLifecyclePolicyResourceSelectionRecipes>)
//  .tagMap(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.recipes">recipes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>></code> | The recipes to select. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.tagMap">tagMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The Image Builder resources to select by tag. |

---

##### `recipes`<sup>Optional</sup> <a name="recipes" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.recipes"></a>

```java
public IResolvable|java.util.List<ImagebuilderLifecyclePolicyResourceSelectionRecipes> getRecipes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>>

The recipes to select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#recipes ImagebuilderLifecyclePolicy#recipes}

---

##### `tagMap`<sup>Optional</sup> <a name="tagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.tagMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The Image Builder resources to select by tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}

---

### ImagebuilderLifecyclePolicyResourceSelectionRecipes <a name="ImagebuilderLifecyclePolicyResourceSelectionRecipes" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyResourceSelectionRecipes;

ImagebuilderLifecyclePolicyResourceSelectionRecipes.builder()
//  .name(java.lang.String)
//  .semanticVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes.property.name">name</a></code> | <code>java.lang.String</code> | The recipe name. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes.property.semanticVersion">semanticVersion</a></code> | <code>java.lang.String</code> | The recipe version. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The recipe name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}

---

##### `semanticVersion`<sup>Optional</sup> <a name="semanticVersion" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes.property.semanticVersion"></a>

```java
public java.lang.String getSemanticVersion();
```

- *Type:* java.lang.String

The recipe version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#semantic_version ImagebuilderLifecyclePolicy#semantic_version}

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference;

new ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetAmis">resetAmis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetContainers">resetContainers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetSnapshots">resetSnapshots</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAmis` <a name="resetAmis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetAmis"></a>

```java
public void resetAmis()
```

##### `resetContainers` <a name="resetContainers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetContainers"></a>

```java
public void resetContainers()
```

##### `resetSnapshots` <a name="resetSnapshots" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetSnapshots"></a>

```java
public void resetSnapshots()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.amisInput">amisInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.containersInput">containersInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.snapshotsInput">snapshotsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.amis">amis</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.containers">containers</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.snapshots">snapshots</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amisInput`<sup>Optional</sup> <a name="amisInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.amisInput"></a>

```java
public java.lang.Boolean|IResolvable getAmisInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `containersInput`<sup>Optional</sup> <a name="containersInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.containersInput"></a>

```java
public java.lang.Boolean|IResolvable getContainersInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `snapshotsInput`<sup>Optional</sup> <a name="snapshotsInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.snapshotsInput"></a>

```java
public java.lang.Boolean|IResolvable getSnapshotsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `amis`<sup>Required</sup> <a name="amis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.amis"></a>

```java
public java.lang.Boolean|IResolvable getAmis();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.containers"></a>

```java
public java.lang.Boolean|IResolvable getContainers();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `snapshots`<sup>Required</sup> <a name="snapshots" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.snapshots"></a>

```java
public java.lang.Boolean|IResolvable getSnapshots();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference;

new ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.putIncludeResources">putIncludeResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resetIncludeResources">resetIncludeResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIncludeResources` <a name="putIncludeResources" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.putIncludeResources"></a>

```java
public void putIncludeResources(ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.putIncludeResources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a>

---

##### `resetIncludeResources` <a name="resetIncludeResources" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resetIncludeResources"></a>

```java
public void resetIncludeResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.includeResources">includeResources</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.includeResourcesInput">includeResourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeResources`<sup>Required</sup> <a name="includeResources" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.includeResources"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference getIncludeResources();
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference</a>

---

##### `includeResourcesInput`<sup>Optional</sup> <a name="includeResourcesInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.includeResourcesInput"></a>

```java
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources getIncludeResourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.internalValue"></a>

```java
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetailsAction getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference;

new ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resetUnit">resetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resetUnit"></a>

```java
public void resetUnit()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.internalValue"></a>

```java
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference;

new ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.putLastLaunched">putLastLaunched</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetIsPublic">resetIsPublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetLastLaunched">resetLastLaunched</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetRegions">resetRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetSharedAccounts">resetSharedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetTagMap">resetTagMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLastLaunched` <a name="putLastLaunched" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.putLastLaunched"></a>

```java
public void putLastLaunched(ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.putLastLaunched.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a>

---

##### `resetIsPublic` <a name="resetIsPublic" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetIsPublic"></a>

```java
public void resetIsPublic()
```

##### `resetLastLaunched` <a name="resetLastLaunched" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetLastLaunched"></a>

```java
public void resetLastLaunched()
```

##### `resetRegions` <a name="resetRegions" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetRegions"></a>

```java
public void resetRegions()
```

##### `resetSharedAccounts` <a name="resetSharedAccounts" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetSharedAccounts"></a>

```java
public void resetSharedAccounts()
```

##### `resetTagMap` <a name="resetTagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetTagMap"></a>

```java
public void resetTagMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.lastLaunched">lastLaunched</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.isPublicInput">isPublicInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.lastLaunchedInput">lastLaunchedInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.regionsInput">regionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.sharedAccountsInput">sharedAccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.tagMapInput">tagMapInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.isPublic">isPublic</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.sharedAccounts">sharedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.tagMap">tagMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastLaunched`<sup>Required</sup> <a name="lastLaunched" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.lastLaunched"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference getLastLaunched();
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference</a>

---

##### `isPublicInput`<sup>Optional</sup> <a name="isPublicInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.isPublicInput"></a>

```java
public java.lang.Boolean|IResolvable getIsPublicInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `lastLaunchedInput`<sup>Optional</sup> <a name="lastLaunchedInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.lastLaunchedInput"></a>

```java
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched getLastLaunchedInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a>

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.regionsInput"></a>

```java
public java.util.List<java.lang.String> getRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sharedAccountsInput`<sup>Optional</sup> <a name="sharedAccountsInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.sharedAccountsInput"></a>

```java
public java.util.List<java.lang.String> getSharedAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagMapInput`<sup>Optional</sup> <a name="tagMapInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.tagMapInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagMapInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.isPublic"></a>

```java
public java.lang.Boolean|IResolvable getIsPublic();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sharedAccounts`<sup>Required</sup> <a name="sharedAccounts" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.sharedAccounts"></a>

```java
public java.util.List<java.lang.String> getSharedAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagMap`<sup>Required</sup> <a name="tagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.tagMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.internalValue"></a>

```java
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference;

new ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.putAmis">putAmis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resetAmis">resetAmis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resetTagMap">resetTagMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmis` <a name="putAmis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.putAmis"></a>

```java
public void putAmis(ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.putAmis.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a>

---

##### `resetAmis` <a name="resetAmis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resetAmis"></a>

```java
public void resetAmis()
```

##### `resetTagMap` <a name="resetTagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resetTagMap"></a>

```java
public void resetTagMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.amis">amis</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.amisInput">amisInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.tagMapInput">tagMapInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.tagMap">tagMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amis`<sup>Required</sup> <a name="amis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.amis"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference getAmis();
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference</a>

---

##### `amisInput`<sup>Optional</sup> <a name="amisInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.amisInput"></a>

```java
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis getAmisInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a>

---

##### `tagMapInput`<sup>Optional</sup> <a name="tagMapInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.tagMapInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagMapInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagMap`<sup>Required</sup> <a name="tagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.tagMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference;

new ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resetRetainAtLeast">resetRetainAtLeast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetainAtLeast` <a name="resetRetainAtLeast" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resetRetainAtLeast"></a>

```java
public void resetRetainAtLeast()
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resetUnit"></a>

```java
public void resetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.retainAtLeastInput">retainAtLeastInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.retainAtLeast">retainAtLeast</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `retainAtLeastInput`<sup>Optional</sup> <a name="retainAtLeastInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.retainAtLeastInput"></a>

```java
public java.lang.Number getRetainAtLeastInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `retainAtLeast`<sup>Required</sup> <a name="retainAtLeast" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.retainAtLeast"></a>

```java
public java.lang.Number getRetainAtLeast();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetailsFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailsList <a name="ImagebuilderLifecyclePolicyPolicyDetailsList" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailsList;

new ImagebuilderLifecyclePolicyPolicyDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.get"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ImagebuilderLifecyclePolicyPolicyDetails> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>>

---


### ImagebuilderLifecyclePolicyPolicyDetailsOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference;

new ImagebuilderLifecyclePolicyPolicyDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putExclusionRules">putExclusionRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resetExclusionRules">resetExclusionRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putAction"></a>

```java
public void putAction(ImagebuilderLifecyclePolicyPolicyDetailsAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a>

---

##### `putExclusionRules` <a name="putExclusionRules" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putExclusionRules"></a>

```java
public void putExclusionRules(ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putExclusionRules.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a>

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putFilter"></a>

```java
public void putFilter(ImagebuilderLifecyclePolicyPolicyDetailsFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a>

---

##### `resetExclusionRules` <a name="resetExclusionRules" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resetExclusionRules"></a>

```java
public void resetExclusionRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.exclusionRules">exclusionRules</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.actionInput">actionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.exclusionRulesInput">exclusionRulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.action"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference getAction();
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference</a>

---

##### `exclusionRules`<sup>Required</sup> <a name="exclusionRules" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.exclusionRules"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference getExclusionRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.filter"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.actionInput"></a>

```java
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetailsAction getActionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a>

---

##### `exclusionRulesInput`<sup>Optional</sup> <a name="exclusionRulesInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.exclusionRulesInput"></a>

```java
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules getExclusionRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.filterInput"></a>

```java
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetailsFilter getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>

---


### ImagebuilderLifecyclePolicyResourceSelectionOutputReference <a name="ImagebuilderLifecyclePolicyResourceSelectionOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference;

new ImagebuilderLifecyclePolicyResourceSelectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.putRecipes">putRecipes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetRecipes">resetRecipes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetTagMap">resetTagMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecipes` <a name="putRecipes" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.putRecipes"></a>

```java
public void putRecipes(IResolvable|java.util.List<ImagebuilderLifecyclePolicyResourceSelectionRecipes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.putRecipes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>>

---

##### `resetRecipes` <a name="resetRecipes" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetRecipes"></a>

```java
public void resetRecipes()
```

##### `resetTagMap` <a name="resetTagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetTagMap"></a>

```java
public void resetTagMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipes">recipes</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList">ImagebuilderLifecyclePolicyResourceSelectionRecipesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipesInput">recipesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMapInput">tagMapInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMap">tagMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `recipes`<sup>Required</sup> <a name="recipes" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipes"></a>

```java
public ImagebuilderLifecyclePolicyResourceSelectionRecipesList getRecipes();
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList">ImagebuilderLifecyclePolicyResourceSelectionRecipesList</a>

---

##### `recipesInput`<sup>Optional</sup> <a name="recipesInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipesInput"></a>

```java
public IResolvable|java.util.List<ImagebuilderLifecyclePolicyResourceSelectionRecipes> getRecipesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>>

---

##### `tagMapInput`<sup>Optional</sup> <a name="tagMapInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMapInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagMapInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagMap`<sup>Required</sup> <a name="tagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.internalValue"></a>

```java
public IResolvable|ImagebuilderLifecyclePolicyResourceSelection getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>

---


### ImagebuilderLifecyclePolicyResourceSelectionRecipesList <a name="ImagebuilderLifecyclePolicyResourceSelectionRecipesList" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList;

new ImagebuilderLifecyclePolicyResourceSelectionRecipesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.get"></a>

```java
public ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ImagebuilderLifecyclePolicyResourceSelectionRecipes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>>

---


### ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference <a name="ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference;

new ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resetSemanticVersion">resetSemanticVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetSemanticVersion` <a name="resetSemanticVersion" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resetSemanticVersion"></a>

```java
public void resetSemanticVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.semanticVersionInput">semanticVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.semanticVersion">semanticVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `semanticVersionInput`<sup>Optional</sup> <a name="semanticVersionInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.semanticVersionInput"></a>

```java
public java.lang.String getSemanticVersionInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `semanticVersion`<sup>Required</sup> <a name="semanticVersion" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.semanticVersion"></a>

```java
public java.lang.String getSemanticVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.internalValue"></a>

```java
public IResolvable|ImagebuilderLifecyclePolicyResourceSelectionRecipes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>

---



