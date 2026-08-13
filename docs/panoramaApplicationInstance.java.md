# `panoramaApplicationInstance` Submodule <a name="`panoramaApplicationInstance` Submodule" id="@cdktn/provider-awscc.panoramaApplicationInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PanoramaApplicationInstance <a name="PanoramaApplicationInstance" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance awscc_panorama_application_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer"></a>

```java
import io.cdktn.providers.awscc.panorama_application_instance.PanoramaApplicationInstance;

PanoramaApplicationInstance.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .defaultRuntimeContextDevice(java.lang.String)
    .manifestPayload(PanoramaApplicationInstanceManifestPayload)
//  .applicationInstanceIdToReplace(java.lang.String)
//  .description(java.lang.String)
//  .manifestOverridesPayload(PanoramaApplicationInstanceManifestOverridesPayload)
//  .name(java.lang.String)
//  .runtimeRoleArn(java.lang.String)
//  .tags(IResolvable|java.util.List<PanoramaApplicationInstanceTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.defaultRuntimeContextDevice">defaultRuntimeContextDevice</a></code> | <code>java.lang.String</code> | The device's ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.manifestPayload">manifestPayload</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a></code> | The application's manifest document. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.applicationInstanceIdToReplace">applicationInstanceIdToReplace</a></code> | <code>java.lang.String</code> | The ID of an application instance to replace with the new instance. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description for the application instance. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.manifestOverridesPayload">manifestOverridesPayload</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a></code> | Setting overrides for the application manifest. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A name for the application instance. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.runtimeRoleArn">runtimeRoleArn</a></code> | <code>java.lang.String</code> | The ARN of a runtime role for the application instance. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>></code> | Tags for the application instance. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `defaultRuntimeContextDevice`<sup>Required</sup> <a name="defaultRuntimeContextDevice" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.defaultRuntimeContextDevice"></a>

- *Type:* java.lang.String

The device's ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#default_runtime_context_device PanoramaApplicationInstance#default_runtime_context_device}

---

##### `manifestPayload`<sup>Required</sup> <a name="manifestPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.manifestPayload"></a>

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a>

The application's manifest document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#manifest_payload PanoramaApplicationInstance#manifest_payload}

---

##### `applicationInstanceIdToReplace`<sup>Optional</sup> <a name="applicationInstanceIdToReplace" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.applicationInstanceIdToReplace"></a>

- *Type:* java.lang.String

The ID of an application instance to replace with the new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#application_instance_id_to_replace PanoramaApplicationInstance#application_instance_id_to_replace}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description for the application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#description PanoramaApplicationInstance#description}

---

##### `manifestOverridesPayload`<sup>Optional</sup> <a name="manifestOverridesPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.manifestOverridesPayload"></a>

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a>

Setting overrides for the application manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#manifest_overrides_payload PanoramaApplicationInstance#manifest_overrides_payload}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A name for the application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#name PanoramaApplicationInstance#name}

---

##### `runtimeRoleArn`<sup>Optional</sup> <a name="runtimeRoleArn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.runtimeRoleArn"></a>

- *Type:* java.lang.String

The ARN of a runtime role for the application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#runtime_role_arn PanoramaApplicationInstance#runtime_role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>>

Tags for the application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#tags PanoramaApplicationInstance#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putManifestOverridesPayload">putManifestOverridesPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putManifestPayload">putManifestPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetApplicationInstanceIdToReplace">resetApplicationInstanceIdToReplace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetManifestOverridesPayload">resetManifestOverridesPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetRuntimeRoleArn">resetRuntimeRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putManifestOverridesPayload` <a name="putManifestOverridesPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putManifestOverridesPayload"></a>

```java
public void putManifestOverridesPayload(PanoramaApplicationInstanceManifestOverridesPayload value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putManifestOverridesPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a>

---

##### `putManifestPayload` <a name="putManifestPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putManifestPayload"></a>

```java
public void putManifestPayload(PanoramaApplicationInstanceManifestPayload value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putManifestPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<PanoramaApplicationInstanceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>>

---

##### `resetApplicationInstanceIdToReplace` <a name="resetApplicationInstanceIdToReplace" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetApplicationInstanceIdToReplace"></a>

```java
public void resetApplicationInstanceIdToReplace()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetManifestOverridesPayload` <a name="resetManifestOverridesPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetManifestOverridesPayload"></a>

```java
public void resetManifestOverridesPayload()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetName"></a>

```java
public void resetName()
```

##### `resetRuntimeRoleArn` <a name="resetRuntimeRoleArn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetRuntimeRoleArn"></a>

```java
public void resetRuntimeRoleArn()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PanoramaApplicationInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isConstruct"></a>

```java
import io.cdktn.providers.awscc.panorama_application_instance.PanoramaApplicationInstance;

PanoramaApplicationInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.panorama_application_instance.PanoramaApplicationInstance;

PanoramaApplicationInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.panorama_application_instance.PanoramaApplicationInstance;

PanoramaApplicationInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.panorama_application_instance.PanoramaApplicationInstance;

PanoramaApplicationInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PanoramaApplicationInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PanoramaApplicationInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PanoramaApplicationInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PanoramaApplicationInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PanoramaApplicationInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.applicationInstanceId">applicationInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.createdTime">createdTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.defaultRuntimeContextDeviceName">defaultRuntimeContextDeviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.healthStatus">healthStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestOverridesPayload">manifestOverridesPayload</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference">PanoramaApplicationInstanceManifestOverridesPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestPayload">manifestPayload</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference">PanoramaApplicationInstanceManifestPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.statusDescription">statusDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList">PanoramaApplicationInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.applicationInstanceIdToReplaceInput">applicationInstanceIdToReplaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.defaultRuntimeContextDeviceInput">defaultRuntimeContextDeviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestOverridesPayloadInput">manifestOverridesPayloadInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestPayloadInput">manifestPayloadInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.runtimeRoleArnInput">runtimeRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.applicationInstanceIdToReplace">applicationInstanceIdToReplace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.defaultRuntimeContextDevice">defaultRuntimeContextDevice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.runtimeRoleArn">runtimeRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationInstanceId`<sup>Required</sup> <a name="applicationInstanceId" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.applicationInstanceId"></a>

```java
public java.lang.String getApplicationInstanceId();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.createdTime"></a>

```java
public java.lang.Number getCreatedTime();
```

- *Type:* java.lang.Number

---

##### `defaultRuntimeContextDeviceName`<sup>Required</sup> <a name="defaultRuntimeContextDeviceName" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.defaultRuntimeContextDeviceName"></a>

```java
public java.lang.String getDefaultRuntimeContextDeviceName();
```

- *Type:* java.lang.String

---

##### `healthStatus`<sup>Required</sup> <a name="healthStatus" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.healthStatus"></a>

```java
public java.lang.String getHealthStatus();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.lastUpdatedTime"></a>

```java
public java.lang.Number getLastUpdatedTime();
```

- *Type:* java.lang.Number

---

##### `manifestOverridesPayload`<sup>Required</sup> <a name="manifestOverridesPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestOverridesPayload"></a>

```java
public PanoramaApplicationInstanceManifestOverridesPayloadOutputReference getManifestOverridesPayload();
```

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference">PanoramaApplicationInstanceManifestOverridesPayloadOutputReference</a>

---

##### `manifestPayload`<sup>Required</sup> <a name="manifestPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestPayload"></a>

```java
public PanoramaApplicationInstanceManifestPayloadOutputReference getManifestPayload();
```

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference">PanoramaApplicationInstanceManifestPayloadOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusDescription`<sup>Required</sup> <a name="statusDescription" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.statusDescription"></a>

```java
public java.lang.String getStatusDescription();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.tags"></a>

```java
public PanoramaApplicationInstanceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList">PanoramaApplicationInstanceTagsList</a>

---

##### `applicationInstanceIdToReplaceInput`<sup>Optional</sup> <a name="applicationInstanceIdToReplaceInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.applicationInstanceIdToReplaceInput"></a>

```java
public java.lang.String getApplicationInstanceIdToReplaceInput();
```

- *Type:* java.lang.String

---

##### `defaultRuntimeContextDeviceInput`<sup>Optional</sup> <a name="defaultRuntimeContextDeviceInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.defaultRuntimeContextDeviceInput"></a>

```java
public java.lang.String getDefaultRuntimeContextDeviceInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `manifestOverridesPayloadInput`<sup>Optional</sup> <a name="manifestOverridesPayloadInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestOverridesPayloadInput"></a>

```java
public IResolvable|PanoramaApplicationInstanceManifestOverridesPayload getManifestOverridesPayloadInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a>

---

##### `manifestPayloadInput`<sup>Optional</sup> <a name="manifestPayloadInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestPayloadInput"></a>

```java
public IResolvable|PanoramaApplicationInstanceManifestPayload getManifestPayloadInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `runtimeRoleArnInput`<sup>Optional</sup> <a name="runtimeRoleArnInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.runtimeRoleArnInput"></a>

```java
public java.lang.String getRuntimeRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.tagsInput"></a>

```java
public IResolvable|java.util.List<PanoramaApplicationInstanceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>>

---

##### `applicationInstanceIdToReplace`<sup>Required</sup> <a name="applicationInstanceIdToReplace" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.applicationInstanceIdToReplace"></a>

```java
public java.lang.String getApplicationInstanceIdToReplace();
```

- *Type:* java.lang.String

---

##### `defaultRuntimeContextDevice`<sup>Required</sup> <a name="defaultRuntimeContextDevice" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.defaultRuntimeContextDevice"></a>

```java
public java.lang.String getDefaultRuntimeContextDevice();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `runtimeRoleArn`<sup>Required</sup> <a name="runtimeRoleArn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.runtimeRoleArn"></a>

```java
public java.lang.String getRuntimeRoleArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PanoramaApplicationInstanceConfig <a name="PanoramaApplicationInstanceConfig" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.panorama_application_instance.PanoramaApplicationInstanceConfig;

PanoramaApplicationInstanceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .defaultRuntimeContextDevice(java.lang.String)
    .manifestPayload(PanoramaApplicationInstanceManifestPayload)
//  .applicationInstanceIdToReplace(java.lang.String)
//  .description(java.lang.String)
//  .manifestOverridesPayload(PanoramaApplicationInstanceManifestOverridesPayload)
//  .name(java.lang.String)
//  .runtimeRoleArn(java.lang.String)
//  .tags(IResolvable|java.util.List<PanoramaApplicationInstanceTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.defaultRuntimeContextDevice">defaultRuntimeContextDevice</a></code> | <code>java.lang.String</code> | The device's ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.manifestPayload">manifestPayload</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a></code> | The application's manifest document. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.applicationInstanceIdToReplace">applicationInstanceIdToReplace</a></code> | <code>java.lang.String</code> | The ID of an application instance to replace with the new instance. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description for the application instance. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.manifestOverridesPayload">manifestOverridesPayload</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a></code> | Setting overrides for the application manifest. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | A name for the application instance. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.runtimeRoleArn">runtimeRoleArn</a></code> | <code>java.lang.String</code> | The ARN of a runtime role for the application instance. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>></code> | Tags for the application instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `defaultRuntimeContextDevice`<sup>Required</sup> <a name="defaultRuntimeContextDevice" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.defaultRuntimeContextDevice"></a>

```java
public java.lang.String getDefaultRuntimeContextDevice();
```

- *Type:* java.lang.String

The device's ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#default_runtime_context_device PanoramaApplicationInstance#default_runtime_context_device}

---

##### `manifestPayload`<sup>Required</sup> <a name="manifestPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.manifestPayload"></a>

```java
public PanoramaApplicationInstanceManifestPayload getManifestPayload();
```

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a>

The application's manifest document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#manifest_payload PanoramaApplicationInstance#manifest_payload}

---

##### `applicationInstanceIdToReplace`<sup>Optional</sup> <a name="applicationInstanceIdToReplace" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.applicationInstanceIdToReplace"></a>

```java
public java.lang.String getApplicationInstanceIdToReplace();
```

- *Type:* java.lang.String

The ID of an application instance to replace with the new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#application_instance_id_to_replace PanoramaApplicationInstance#application_instance_id_to_replace}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description for the application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#description PanoramaApplicationInstance#description}

---

##### `manifestOverridesPayload`<sup>Optional</sup> <a name="manifestOverridesPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.manifestOverridesPayload"></a>

```java
public PanoramaApplicationInstanceManifestOverridesPayload getManifestOverridesPayload();
```

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a>

Setting overrides for the application manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#manifest_overrides_payload PanoramaApplicationInstance#manifest_overrides_payload}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A name for the application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#name PanoramaApplicationInstance#name}

---

##### `runtimeRoleArn`<sup>Optional</sup> <a name="runtimeRoleArn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.runtimeRoleArn"></a>

```java
public java.lang.String getRuntimeRoleArn();
```

- *Type:* java.lang.String

The ARN of a runtime role for the application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#runtime_role_arn PanoramaApplicationInstance#runtime_role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<PanoramaApplicationInstanceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>>

Tags for the application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#tags PanoramaApplicationInstance#tags}

---

### PanoramaApplicationInstanceManifestOverridesPayload <a name="PanoramaApplicationInstanceManifestOverridesPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload.Initializer"></a>

```java
import io.cdktn.providers.awscc.panorama_application_instance.PanoramaApplicationInstanceManifestOverridesPayload;

PanoramaApplicationInstanceManifestOverridesPayload.builder()
//  .payloadData(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload.property.payloadData">payloadData</a></code> | <code>java.lang.String</code> | The overrides document. |

---

##### `payloadData`<sup>Optional</sup> <a name="payloadData" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload.property.payloadData"></a>

```java
public java.lang.String getPayloadData();
```

- *Type:* java.lang.String

The overrides document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#payload_data PanoramaApplicationInstance#payload_data}

---

### PanoramaApplicationInstanceManifestPayload <a name="PanoramaApplicationInstanceManifestPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload.Initializer"></a>

```java
import io.cdktn.providers.awscc.panorama_application_instance.PanoramaApplicationInstanceManifestPayload;

PanoramaApplicationInstanceManifestPayload.builder()
//  .payloadData(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload.property.payloadData">payloadData</a></code> | <code>java.lang.String</code> | The application manifest. |

---

##### `payloadData`<sup>Optional</sup> <a name="payloadData" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload.property.payloadData"></a>

```java
public java.lang.String getPayloadData();
```

- *Type:* java.lang.String

The application manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#payload_data PanoramaApplicationInstance#payload_data}

---

### PanoramaApplicationInstanceTags <a name="PanoramaApplicationInstanceTags" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.panorama_application_instance.PanoramaApplicationInstanceTags;

PanoramaApplicationInstanceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#key PanoramaApplicationInstance#key}. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#value PanoramaApplicationInstance#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#key PanoramaApplicationInstance#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#value PanoramaApplicationInstance#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### PanoramaApplicationInstanceManifestOverridesPayloadOutputReference <a name="PanoramaApplicationInstanceManifestOverridesPayloadOutputReference" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.panorama_application_instance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference;

new PanoramaApplicationInstanceManifestOverridesPayloadOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.resetPayloadData">resetPayloadData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPayloadData` <a name="resetPayloadData" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.resetPayloadData"></a>

```java
public void resetPayloadData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.payloadDataInput">payloadDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.payloadData">payloadData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `payloadDataInput`<sup>Optional</sup> <a name="payloadDataInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.payloadDataInput"></a>

```java
public java.lang.String getPayloadDataInput();
```

- *Type:* java.lang.String

---

##### `payloadData`<sup>Required</sup> <a name="payloadData" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.payloadData"></a>

```java
public java.lang.String getPayloadData();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.internalValue"></a>

```java
public IResolvable|PanoramaApplicationInstanceManifestOverridesPayload getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a>

---


### PanoramaApplicationInstanceManifestPayloadOutputReference <a name="PanoramaApplicationInstanceManifestPayloadOutputReference" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.panorama_application_instance.PanoramaApplicationInstanceManifestPayloadOutputReference;

new PanoramaApplicationInstanceManifestPayloadOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.resetPayloadData">resetPayloadData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPayloadData` <a name="resetPayloadData" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.resetPayloadData"></a>

```java
public void resetPayloadData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.payloadDataInput">payloadDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.payloadData">payloadData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `payloadDataInput`<sup>Optional</sup> <a name="payloadDataInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.payloadDataInput"></a>

```java
public java.lang.String getPayloadDataInput();
```

- *Type:* java.lang.String

---

##### `payloadData`<sup>Required</sup> <a name="payloadData" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.payloadData"></a>

```java
public java.lang.String getPayloadData();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.internalValue"></a>

```java
public IResolvable|PanoramaApplicationInstanceManifestPayload getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a>

---


### PanoramaApplicationInstanceTagsList <a name="PanoramaApplicationInstanceTagsList" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.panorama_application_instance.PanoramaApplicationInstanceTagsList;

new PanoramaApplicationInstanceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.get"></a>

```java
public PanoramaApplicationInstanceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PanoramaApplicationInstanceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>>

---


### PanoramaApplicationInstanceTagsOutputReference <a name="PanoramaApplicationInstanceTagsOutputReference" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.panorama_application_instance.PanoramaApplicationInstanceTagsOutputReference;

new PanoramaApplicationInstanceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|PanoramaApplicationInstanceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>

---



