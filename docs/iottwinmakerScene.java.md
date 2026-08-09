# `iottwinmakerScene` Submodule <a name="`iottwinmakerScene` Submodule" id="@cdktn/provider-awscc.iottwinmakerScene"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IottwinmakerScene <a name="IottwinmakerScene" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iottwinmaker_scene awscc_iottwinmaker_scene}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer"></a>

```java
import io.cdktn.providers.awscc.iottwinmaker_scene.IottwinmakerScene;

IottwinmakerScene.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .contentLocation(java.lang.String)
    .sceneId(java.lang.String)
    .workspaceId(java.lang.String)
//  .capabilities(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .sceneMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.contentLocation">contentLocation</a></code> | <code>java.lang.String</code> | The relative path that specifies the location of the content definition file. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.sceneId">sceneId</a></code> | <code>java.lang.String</code> | The ID of the scene. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | The ID of the scene. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | A list of capabilities that the scene uses to render. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the scene. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.sceneMetadata">sceneMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A key-value pair of scene metadata for the scene. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A key-value pair to associate with a resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `contentLocation`<sup>Required</sup> <a name="contentLocation" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.contentLocation"></a>

- *Type:* java.lang.String

The relative path that specifies the location of the content definition file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iottwinmaker_scene#content_location IottwinmakerScene#content_location}

---

##### `sceneId`<sup>Required</sup> <a name="sceneId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.sceneId"></a>

- *Type:* java.lang.String

The ID of the scene.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iottwinmaker_scene#scene_id IottwinmakerScene#scene_id}

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

The ID of the scene.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iottwinmaker_scene#workspace_id IottwinmakerScene#workspace_id}

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.capabilities"></a>

- *Type:* java.util.List<java.lang.String>

A list of capabilities that the scene uses to render.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iottwinmaker_scene#capabilities IottwinmakerScene#capabilities}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the scene.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iottwinmaker_scene#description IottwinmakerScene#description}

---

##### `sceneMetadata`<sup>Optional</sup> <a name="sceneMetadata" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.sceneMetadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A key-value pair of scene metadata for the scene.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iottwinmaker_scene#scene_metadata IottwinmakerScene#scene_metadata}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iottwinmaker_scene#tags IottwinmakerScene#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetCapabilities">resetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetSceneMetadata">resetSceneMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCapabilities` <a name="resetCapabilities" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetCapabilities"></a>

```java
public void resetCapabilities()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetSceneMetadata` <a name="resetSceneMetadata" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetSceneMetadata"></a>

```java
public void resetSceneMetadata()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IottwinmakerScene resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iottwinmaker_scene.IottwinmakerScene;

IottwinmakerScene.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iottwinmaker_scene.IottwinmakerScene;

IottwinmakerScene.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iottwinmaker_scene.IottwinmakerScene;

IottwinmakerScene.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iottwinmaker_scene.IottwinmakerScene;

IottwinmakerScene.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IottwinmakerScene.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IottwinmakerScene resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IottwinmakerScene to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IottwinmakerScene that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iottwinmaker_scene#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IottwinmakerScene to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.creationDateTime">creationDateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.generatedSceneMetadata">generatedSceneMetadata</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.updateDateTime">updateDateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.capabilitiesInput">capabilitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.contentLocationInput">contentLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.sceneIdInput">sceneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.sceneMetadataInput">sceneMetadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.contentLocation">contentLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.sceneId">sceneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.sceneMetadata">sceneMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `creationDateTime`<sup>Required</sup> <a name="creationDateTime" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.creationDateTime"></a>

```java
public java.lang.String getCreationDateTime();
```

- *Type:* java.lang.String

---

##### `generatedSceneMetadata`<sup>Required</sup> <a name="generatedSceneMetadata" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.generatedSceneMetadata"></a>

```java
public StringMap getGeneratedSceneMetadata();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `updateDateTime`<sup>Required</sup> <a name="updateDateTime" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.updateDateTime"></a>

```java
public java.lang.String getUpdateDateTime();
```

- *Type:* java.lang.String

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.capabilitiesInput"></a>

```java
public java.util.List<java.lang.String> getCapabilitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `contentLocationInput`<sup>Optional</sup> <a name="contentLocationInput" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.contentLocationInput"></a>

```java
public java.lang.String getContentLocationInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `sceneIdInput`<sup>Optional</sup> <a name="sceneIdInput" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.sceneIdInput"></a>

```java
public java.lang.String getSceneIdInput();
```

- *Type:* java.lang.String

---

##### `sceneMetadataInput`<sup>Optional</sup> <a name="sceneMetadataInput" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.sceneMetadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSceneMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.capabilities"></a>

```java
public java.util.List<java.lang.String> getCapabilities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `contentLocation`<sup>Required</sup> <a name="contentLocation" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.contentLocation"></a>

```java
public java.lang.String getContentLocation();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `sceneId`<sup>Required</sup> <a name="sceneId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.sceneId"></a>

```java
public java.lang.String getSceneId();
```

- *Type:* java.lang.String

---

##### `sceneMetadata`<sup>Required</sup> <a name="sceneMetadata" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.sceneMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSceneMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IottwinmakerSceneConfig <a name="IottwinmakerSceneConfig" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iottwinmaker_scene.IottwinmakerSceneConfig;

IottwinmakerSceneConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .contentLocation(java.lang.String)
    .sceneId(java.lang.String)
    .workspaceId(java.lang.String)
//  .capabilities(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .sceneMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.contentLocation">contentLocation</a></code> | <code>java.lang.String</code> | The relative path that specifies the location of the content definition file. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.sceneId">sceneId</a></code> | <code>java.lang.String</code> | The ID of the scene. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | The ID of the scene. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | A list of capabilities that the scene uses to render. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the scene. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.sceneMetadata">sceneMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A key-value pair of scene metadata for the scene. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A key-value pair to associate with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `contentLocation`<sup>Required</sup> <a name="contentLocation" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.contentLocation"></a>

```java
public java.lang.String getContentLocation();
```

- *Type:* java.lang.String

The relative path that specifies the location of the content definition file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iottwinmaker_scene#content_location IottwinmakerScene#content_location}

---

##### `sceneId`<sup>Required</sup> <a name="sceneId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.sceneId"></a>

```java
public java.lang.String getSceneId();
```

- *Type:* java.lang.String

The ID of the scene.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iottwinmaker_scene#scene_id IottwinmakerScene#scene_id}

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

The ID of the scene.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iottwinmaker_scene#workspace_id IottwinmakerScene#workspace_id}

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.capabilities"></a>

```java
public java.util.List<java.lang.String> getCapabilities();
```

- *Type:* java.util.List<java.lang.String>

A list of capabilities that the scene uses to render.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iottwinmaker_scene#capabilities IottwinmakerScene#capabilities}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the scene.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iottwinmaker_scene#description IottwinmakerScene#description}

---

##### `sceneMetadata`<sup>Optional</sup> <a name="sceneMetadata" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.sceneMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSceneMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A key-value pair of scene metadata for the scene.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iottwinmaker_scene#scene_metadata IottwinmakerScene#scene_metadata}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iottwinmaker_scene#tags IottwinmakerScene#tags}

---



