# `sagemakerInferenceRouter` Submodule <a name="`sagemakerInferenceRouter` Submodule" id="@cdktn/provider-awscc.sagemakerInferenceRouter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerInferenceRouter <a name="SagemakerInferenceRouter" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router awscc_sagemaker_inference_router}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_inference_router.SagemakerInferenceRouter;

SagemakerInferenceRouter.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .routingTargets(IResolvable|java.util.List<SagemakerInferenceRouterRoutingTargets>)
//  .inferenceRouterName(java.lang.String)
//  .tags(IResolvable|java.util.List<SagemakerInferenceRouterTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.routingTargets">routingTargets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>></code> | The routing targets of the Inference Router. An update replaces the full list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.inferenceRouterName">inferenceRouterName</a></code> | <code>java.lang.String</code> | The name of the Inference Router. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>></code> | Tags to associate with the Inference Router. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `routingTargets`<sup>Required</sup> <a name="routingTargets" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.routingTargets"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>>

The routing targets of the Inference Router. An update replaces the full list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#routing_targets SagemakerInferenceRouter#routing_targets}

---

##### `inferenceRouterName`<sup>Optional</sup> <a name="inferenceRouterName" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.inferenceRouterName"></a>

- *Type:* java.lang.String

The name of the Inference Router.

Unique per account per Region, case-sensitive. If you don't specify a name, CloudFormation generates one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#inference_router_name SagemakerInferenceRouter#inference_router_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>>

Tags to associate with the Inference Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#tags SagemakerInferenceRouter#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.putRoutingTargets">putRoutingTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.resetInferenceRouterName">resetInferenceRouterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRoutingTargets` <a name="putRoutingTargets" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.putRoutingTargets"></a>

```java
public void putRoutingTargets(IResolvable|java.util.List<SagemakerInferenceRouterRoutingTargets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.putRoutingTargets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SagemakerInferenceRouterTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>>

---

##### `resetInferenceRouterName` <a name="resetInferenceRouterName" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.resetInferenceRouterName"></a>

```java
public void resetInferenceRouterName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerInferenceRouter resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.isConstruct"></a>

```java
import io.cdktn.providers.awscc.sagemaker_inference_router.SagemakerInferenceRouter;

SagemakerInferenceRouter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.sagemaker_inference_router.SagemakerInferenceRouter;

SagemakerInferenceRouter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.sagemaker_inference_router.SagemakerInferenceRouter;

SagemakerInferenceRouter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.sagemaker_inference_router.SagemakerInferenceRouter;

SagemakerInferenceRouter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SagemakerInferenceRouter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SagemakerInferenceRouter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SagemakerInferenceRouter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SagemakerInferenceRouter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerInferenceRouter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.inferenceRouterArn">inferenceRouterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.routingTargets">routingTargets</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList">SagemakerInferenceRouterRoutingTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList">SagemakerInferenceRouterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.inferenceRouterNameInput">inferenceRouterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.routingTargetsInput">routingTargetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.inferenceRouterName">inferenceRouterName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inferenceRouterArn`<sup>Required</sup> <a name="inferenceRouterArn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.inferenceRouterArn"></a>

```java
public java.lang.String getInferenceRouterArn();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.lastModifiedTime"></a>

```java
public java.lang.String getLastModifiedTime();
```

- *Type:* java.lang.String

---

##### `routingTargets`<sup>Required</sup> <a name="routingTargets" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.routingTargets"></a>

```java
public SagemakerInferenceRouterRoutingTargetsList getRoutingTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList">SagemakerInferenceRouterRoutingTargetsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.tags"></a>

```java
public SagemakerInferenceRouterTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList">SagemakerInferenceRouterTagsList</a>

---

##### `inferenceRouterNameInput`<sup>Optional</sup> <a name="inferenceRouterNameInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.inferenceRouterNameInput"></a>

```java
public java.lang.String getInferenceRouterNameInput();
```

- *Type:* java.lang.String

---

##### `routingTargetsInput`<sup>Optional</sup> <a name="routingTargetsInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.routingTargetsInput"></a>

```java
public IResolvable|java.util.List<SagemakerInferenceRouterRoutingTargets> getRoutingTargetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SagemakerInferenceRouterTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>>

---

##### `inferenceRouterName`<sup>Required</sup> <a name="inferenceRouterName" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.inferenceRouterName"></a>

```java
public java.lang.String getInferenceRouterName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerInferenceRouterConfig <a name="SagemakerInferenceRouterConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_inference_router.SagemakerInferenceRouterConfig;

SagemakerInferenceRouterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .routingTargets(IResolvable|java.util.List<SagemakerInferenceRouterRoutingTargets>)
//  .inferenceRouterName(java.lang.String)
//  .tags(IResolvable|java.util.List<SagemakerInferenceRouterTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.routingTargets">routingTargets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>></code> | The routing targets of the Inference Router. An update replaces the full list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.inferenceRouterName">inferenceRouterName</a></code> | <code>java.lang.String</code> | The name of the Inference Router. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>></code> | Tags to associate with the Inference Router. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `routingTargets`<sup>Required</sup> <a name="routingTargets" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.routingTargets"></a>

```java
public IResolvable|java.util.List<SagemakerInferenceRouterRoutingTargets> getRoutingTargets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>>

The routing targets of the Inference Router. An update replaces the full list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#routing_targets SagemakerInferenceRouter#routing_targets}

---

##### `inferenceRouterName`<sup>Optional</sup> <a name="inferenceRouterName" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.inferenceRouterName"></a>

```java
public java.lang.String getInferenceRouterName();
```

- *Type:* java.lang.String

The name of the Inference Router.

Unique per account per Region, case-sensitive. If you don't specify a name, CloudFormation generates one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#inference_router_name SagemakerInferenceRouter#inference_router_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SagemakerInferenceRouterTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>>

Tags to associate with the Inference Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#tags SagemakerInferenceRouter#tags}

---

### SagemakerInferenceRouterRoutingTargets <a name="SagemakerInferenceRouterRoutingTargets" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_inference_router.SagemakerInferenceRouterRoutingTargets;

SagemakerInferenceRouterRoutingTargets.builder()
    .destinations(IResolvable|java.util.List<SagemakerInferenceRouterRoutingTargetsDestinations>)
    .name(java.lang.String)
//  .asyncInferenceConfig(SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig)
//  .routingPreference(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets.property.destinations">destinations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations">SagemakerInferenceRouterRoutingTargetsDestinations</a>></code> | The endpoints and inference components that serve this routing target. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets.property.name">name</a></code> | <code>java.lang.String</code> | The logical model name a caller passes at invoke time. Unique within an Inference Router. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets.property.asyncInferenceConfig">asyncInferenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig</a></code> | Set this when the routing target's destinations are asynchronous inference endpoints. A routing target without it serves real-time requests. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets.property.routingPreference">routingPreference</a></code> | <code>java.lang.String</code> | How the router prefers this routing target's destinations. |

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets.property.destinations"></a>

```java
public IResolvable|java.util.List<SagemakerInferenceRouterRoutingTargetsDestinations> getDestinations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations">SagemakerInferenceRouterRoutingTargetsDestinations</a>>

The endpoints and inference components that serve this routing target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#destinations SagemakerInferenceRouter#destinations}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The logical model name a caller passes at invoke time. Unique within an Inference Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#name SagemakerInferenceRouter#name}

---

##### `asyncInferenceConfig`<sup>Optional</sup> <a name="asyncInferenceConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets.property.asyncInferenceConfig"></a>

```java
public SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig getAsyncInferenceConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig</a>

Set this when the routing target's destinations are asynchronous inference endpoints. A routing target without it serves real-time requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#async_inference_config SagemakerInferenceRouter#async_inference_config}

---

##### `routingPreference`<sup>Optional</sup> <a name="routingPreference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets.property.routingPreference"></a>

```java
public java.lang.String getRoutingPreference();
```

- *Type:* java.lang.String

How the router prefers this routing target's destinations.

LocalRegionFirst (the default) uses destinations in the router's Region first, then the others, each group in the order listed. InstancePoolOrder, for asynchronous routing targets only, tries destinations in order of the best instance pool they can serve from now. In both, degraded destinations are used after the others. If omitted, LocalRegionFirst is used and returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#routing_preference SagemakerInferenceRouter#routing_preference}

---

### SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig <a name="SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_inference_router.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig;

SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig.builder()
//  .clientConfig(SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig)
//  .outputConfig(SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig.property.clientConfig">clientConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig</a></code> | How the Inference Router submits a request to a destination. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig</a></code> | Where the results of asynchronous requests are written. Every destination of the routing target writes to these paths. |

---

##### `clientConfig`<sup>Optional</sup> <a name="clientConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig.property.clientConfig"></a>

```java
public SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig getClientConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig</a>

How the Inference Router submits a request to a destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#client_config SagemakerInferenceRouter#client_config}

---

##### `outputConfig`<sup>Optional</sup> <a name="outputConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig.property.outputConfig"></a>

```java
public SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig getOutputConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig</a>

Where the results of asynchronous requests are written. Every destination of the routing target writes to these paths.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#output_config SagemakerInferenceRouter#output_config}

---

### SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig <a name="SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_inference_router.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig;

SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig.builder()
//  .maxTimeInBacklogSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig.property.maxTimeInBacklogSeconds">maxTimeInBacklogSeconds</a></code> | <code>java.lang.Number</code> | How long, in seconds, a request can wait for a destination to pick it up before it expires. |

---

##### `maxTimeInBacklogSeconds`<sup>Optional</sup> <a name="maxTimeInBacklogSeconds" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig.property.maxTimeInBacklogSeconds"></a>

```java
public java.lang.Number getMaxTimeInBacklogSeconds();
```

- *Type:* java.lang.Number

How long, in seconds, a request can wait for a destination to pick it up before it expires.

The default is 900.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#max_time_in_backlog_seconds SagemakerInferenceRouter#max_time_in_backlog_seconds}

---

### SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig <a name="SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_inference_router.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig;

SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.builder()
//  .kmsKeyId(java.lang.String)
//  .notificationConfig(SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig)
//  .s3FailurePath(java.lang.String)
//  .s3OutputPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The AWS KMS key that encrypts the results. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.property.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig</a></code> | The SNS topics the Inference Router publishes a completion to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.property.s3FailurePath">s3FailurePath</a></code> | <code>java.lang.String</code> | The Amazon S3 location for failed requests. It can be in any Region and account. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.property.s3OutputPath">s3OutputPath</a></code> | <code>java.lang.String</code> | The Amazon S3 location for successful results. It can be in any Region and account. |

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The AWS KMS key that encrypts the results.

If any destination is in a different account or Region from the Inference Router, use a key ARN or an alias ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#kms_key_id SagemakerInferenceRouter#kms_key_id}

---

##### `notificationConfig`<sup>Optional</sup> <a name="notificationConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.property.notificationConfig"></a>

```java
public SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig getNotificationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig</a>

The SNS topics the Inference Router publishes a completion to.

The notification carries the location of the result, not the result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#notification_config SagemakerInferenceRouter#notification_config}

---

##### `s3FailurePath`<sup>Optional</sup> <a name="s3FailurePath" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.property.s3FailurePath"></a>

```java
public java.lang.String getS3FailurePath();
```

- *Type:* java.lang.String

The Amazon S3 location for failed requests. It can be in any Region and account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#s3_failure_path SagemakerInferenceRouter#s3_failure_path}

---

##### `s3OutputPath`<sup>Optional</sup> <a name="s3OutputPath" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.property.s3OutputPath"></a>

```java
public java.lang.String getS3OutputPath();
```

- *Type:* java.lang.String

The Amazon S3 location for successful results. It can be in any Region and account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#s3_output_path SagemakerInferenceRouter#s3_output_path}

---

### SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig <a name="SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_inference_router.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig;

SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig.builder()
//  .errorTopic(java.lang.String)
//  .successTopic(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig.property.errorTopic">errorTopic</a></code> | <code>java.lang.String</code> | The ARN of a standard (not FIFO) SNS topic to notify when a request fails. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig.property.successTopic">successTopic</a></code> | <code>java.lang.String</code> | The ARN of a standard (not FIFO) SNS topic to notify when a request succeeds. |

---

##### `errorTopic`<sup>Optional</sup> <a name="errorTopic" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig.property.errorTopic"></a>

```java
public java.lang.String getErrorTopic();
```

- *Type:* java.lang.String

The ARN of a standard (not FIFO) SNS topic to notify when a request fails.

It can be in any Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#error_topic SagemakerInferenceRouter#error_topic}

---

##### `successTopic`<sup>Optional</sup> <a name="successTopic" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig.property.successTopic"></a>

```java
public java.lang.String getSuccessTopic();
```

- *Type:* java.lang.String

The ARN of a standard (not FIFO) SNS topic to notify when a request succeeds.

It can be in any Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#success_topic SagemakerInferenceRouter#success_topic}

---

### SagemakerInferenceRouterRoutingTargetsDestinations <a name="SagemakerInferenceRouterRoutingTargetsDestinations" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_inference_router.SagemakerInferenceRouterRoutingTargetsDestinations;

SagemakerInferenceRouterRoutingTargetsDestinations.builder()
    .resourceArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | The ARN of a SageMaker endpoint or inference component that serves the routing target. |

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

The ARN of a SageMaker endpoint or inference component that serves the routing target.

It can be in any Region and account within the Inference Router's partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#resource_arn SagemakerInferenceRouter#resource_arn}

---

### SagemakerInferenceRouterTags <a name="SagemakerInferenceRouterTags" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_inference_router.SagemakerInferenceRouterTags;

SagemakerInferenceRouterTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag key. Tag keys must be unique per resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag key. Tag keys must be unique per resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#key SagemakerInferenceRouter#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#value SagemakerInferenceRouter#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference <a name="SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_inference_router.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference;

new SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.resetMaxTimeInBacklogSeconds">resetMaxTimeInBacklogSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxTimeInBacklogSeconds` <a name="resetMaxTimeInBacklogSeconds" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.resetMaxTimeInBacklogSeconds"></a>

```java
public void resetMaxTimeInBacklogSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.maxTimeInBacklogSecondsInput">maxTimeInBacklogSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.maxTimeInBacklogSeconds">maxTimeInBacklogSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxTimeInBacklogSecondsInput`<sup>Optional</sup> <a name="maxTimeInBacklogSecondsInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.maxTimeInBacklogSecondsInput"></a>

```java
public java.lang.Number getMaxTimeInBacklogSecondsInput();
```

- *Type:* java.lang.Number

---

##### `maxTimeInBacklogSeconds`<sup>Required</sup> <a name="maxTimeInBacklogSeconds" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.maxTimeInBacklogSeconds"></a>

```java
public java.lang.Number getMaxTimeInBacklogSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig</a>

---


### SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference <a name="SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_inference_router.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference;

new SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetErrorTopic">resetErrorTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetSuccessTopic">resetSuccessTopic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetErrorTopic` <a name="resetErrorTopic" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetErrorTopic"></a>

```java
public void resetErrorTopic()
```

##### `resetSuccessTopic` <a name="resetSuccessTopic" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetSuccessTopic"></a>

```java
public void resetSuccessTopic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopicInput">errorTopicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopicInput">successTopicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopic">errorTopic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopic">successTopic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorTopicInput`<sup>Optional</sup> <a name="errorTopicInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopicInput"></a>

```java
public java.lang.String getErrorTopicInput();
```

- *Type:* java.lang.String

---

##### `successTopicInput`<sup>Optional</sup> <a name="successTopicInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopicInput"></a>

```java
public java.lang.String getSuccessTopicInput();
```

- *Type:* java.lang.String

---

##### `errorTopic`<sup>Required</sup> <a name="errorTopic" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopic"></a>

```java
public java.lang.String getErrorTopic();
```

- *Type:* java.lang.String

---

##### `successTopic`<sup>Required</sup> <a name="successTopic" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopic"></a>

```java
public java.lang.String getSuccessTopic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig</a>

---


### SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference <a name="SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_inference_router.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference;

new SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.putNotificationConfig">putNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resetNotificationConfig">resetNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resetS3FailurePath">resetS3FailurePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resetS3OutputPath">resetS3OutputPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNotificationConfig` <a name="putNotificationConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.putNotificationConfig"></a>

```java
public void putNotificationConfig(SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.putNotificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig</a>

---

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetNotificationConfig` <a name="resetNotificationConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resetNotificationConfig"></a>

```java
public void resetNotificationConfig()
```

##### `resetS3FailurePath` <a name="resetS3FailurePath" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resetS3FailurePath"></a>

```java
public void resetS3FailurePath()
```

##### `resetS3OutputPath` <a name="resetS3OutputPath" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resetS3OutputPath"></a>

```java
public void resetS3OutputPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfigInput">notificationConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3FailurePathInput">s3FailurePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPathInput">s3OutputPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3FailurePath">s3FailurePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPath">s3OutputPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `notificationConfig`<sup>Required</sup> <a name="notificationConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfig"></a>

```java
public SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference getNotificationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference</a>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `notificationConfigInput`<sup>Optional</sup> <a name="notificationConfigInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfigInput"></a>

```java
public IResolvable|SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig getNotificationConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig</a>

---

##### `s3FailurePathInput`<sup>Optional</sup> <a name="s3FailurePathInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3FailurePathInput"></a>

```java
public java.lang.String getS3FailurePathInput();
```

- *Type:* java.lang.String

---

##### `s3OutputPathInput`<sup>Optional</sup> <a name="s3OutputPathInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPathInput"></a>

```java
public java.lang.String getS3OutputPathInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `s3FailurePath`<sup>Required</sup> <a name="s3FailurePath" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3FailurePath"></a>

```java
public java.lang.String getS3FailurePath();
```

- *Type:* java.lang.String

---

##### `s3OutputPath`<sup>Required</sup> <a name="s3OutputPath" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPath"></a>

```java
public java.lang.String getS3OutputPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig</a>

---


### SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference <a name="SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_inference_router.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference;

new SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.putClientConfig">putClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.putOutputConfig">putOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.resetClientConfig">resetClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.resetOutputConfig">resetOutputConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientConfig` <a name="putClientConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.putClientConfig"></a>

```java
public void putClientConfig(SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.putClientConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig</a>

---

##### `putOutputConfig` <a name="putOutputConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.putOutputConfig"></a>

```java
public void putOutputConfig(SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.putOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig</a>

---

##### `resetClientConfig` <a name="resetClientConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.resetClientConfig"></a>

```java
public void resetClientConfig()
```

##### `resetOutputConfig` <a name="resetOutputConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.resetOutputConfig"></a>

```java
public void resetOutputConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.clientConfig">clientConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.clientConfigInput">clientConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.outputConfigInput">outputConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientConfig`<sup>Required</sup> <a name="clientConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.clientConfig"></a>

```java
public SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference getClientConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference</a>

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.outputConfig"></a>

```java
public SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference getOutputConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference</a>

---

##### `clientConfigInput`<sup>Optional</sup> <a name="clientConfigInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.clientConfigInput"></a>

```java
public IResolvable|SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig getClientConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig</a>

---

##### `outputConfigInput`<sup>Optional</sup> <a name="outputConfigInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.outputConfigInput"></a>

```java
public IResolvable|SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig getOutputConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig</a>

---


### SagemakerInferenceRouterRoutingTargetsDestinationsList <a name="SagemakerInferenceRouterRoutingTargetsDestinationsList" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_inference_router.SagemakerInferenceRouterRoutingTargetsDestinationsList;

new SagemakerInferenceRouterRoutingTargetsDestinationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.get"></a>

```java
public SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations">SagemakerInferenceRouterRoutingTargetsDestinations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerInferenceRouterRoutingTargetsDestinations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations">SagemakerInferenceRouterRoutingTargetsDestinations</a>>

---


### SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference <a name="SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_inference_router.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference;

new SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations">SagemakerInferenceRouterRoutingTargetsDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.resourceArnInput"></a>

```java
public java.lang.String getResourceArnInput();
```

- *Type:* java.lang.String

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerInferenceRouterRoutingTargetsDestinations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations">SagemakerInferenceRouterRoutingTargetsDestinations</a>

---


### SagemakerInferenceRouterRoutingTargetsList <a name="SagemakerInferenceRouterRoutingTargetsList" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_inference_router.SagemakerInferenceRouterRoutingTargetsList;

new SagemakerInferenceRouterRoutingTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.get"></a>

```java
public SagemakerInferenceRouterRoutingTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerInferenceRouterRoutingTargets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>>

---


### SagemakerInferenceRouterRoutingTargetsOutputReference <a name="SagemakerInferenceRouterRoutingTargetsOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_inference_router.SagemakerInferenceRouterRoutingTargetsOutputReference;

new SagemakerInferenceRouterRoutingTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.putAsyncInferenceConfig">putAsyncInferenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.resetAsyncInferenceConfig">resetAsyncInferenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.resetRoutingPreference">resetRoutingPreference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAsyncInferenceConfig` <a name="putAsyncInferenceConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.putAsyncInferenceConfig"></a>

```java
public void putAsyncInferenceConfig(SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.putAsyncInferenceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig</a>

---

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.putDestinations"></a>

```java
public void putDestinations(IResolvable|java.util.List<SagemakerInferenceRouterRoutingTargetsDestinations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.putDestinations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations">SagemakerInferenceRouterRoutingTargetsDestinations</a>>

---

##### `resetAsyncInferenceConfig` <a name="resetAsyncInferenceConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.resetAsyncInferenceConfig"></a>

```java
public void resetAsyncInferenceConfig()
```

##### `resetRoutingPreference` <a name="resetRoutingPreference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.resetRoutingPreference"></a>

```java
public void resetRoutingPreference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.asyncInferenceConfig">asyncInferenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList">SagemakerInferenceRouterRoutingTargetsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.asyncInferenceConfigInput">asyncInferenceConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations">SagemakerInferenceRouterRoutingTargetsDestinations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.routingPreferenceInput">routingPreferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.routingPreference">routingPreference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `asyncInferenceConfig`<sup>Required</sup> <a name="asyncInferenceConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.asyncInferenceConfig"></a>

```java
public SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference getAsyncInferenceConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference</a>

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.destinations"></a>

```java
public SagemakerInferenceRouterRoutingTargetsDestinationsList getDestinations();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList">SagemakerInferenceRouterRoutingTargetsDestinationsList</a>

---

##### `asyncInferenceConfigInput`<sup>Optional</sup> <a name="asyncInferenceConfigInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.asyncInferenceConfigInput"></a>

```java
public IResolvable|SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig getAsyncInferenceConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.destinationsInput"></a>

```java
public IResolvable|java.util.List<SagemakerInferenceRouterRoutingTargetsDestinations> getDestinationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations">SagemakerInferenceRouterRoutingTargetsDestinations</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `routingPreferenceInput`<sup>Optional</sup> <a name="routingPreferenceInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.routingPreferenceInput"></a>

```java
public java.lang.String getRoutingPreferenceInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `routingPreference`<sup>Required</sup> <a name="routingPreference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.routingPreference"></a>

```java
public java.lang.String getRoutingPreference();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerInferenceRouterRoutingTargets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>

---


### SagemakerInferenceRouterTagsList <a name="SagemakerInferenceRouterTagsList" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_inference_router.SagemakerInferenceRouterTagsList;

new SagemakerInferenceRouterTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.get"></a>

```java
public SagemakerInferenceRouterTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerInferenceRouterTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>>

---


### SagemakerInferenceRouterTagsOutputReference <a name="SagemakerInferenceRouterTagsOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_inference_router.SagemakerInferenceRouterTagsOutputReference;

new SagemakerInferenceRouterTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerInferenceRouterTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>

---



