# `nimblestudioStudioComponent` Submodule <a name="`nimblestudioStudioComponent` Submodule" id="@cdktn/provider-awscc.nimblestudioStudioComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NimblestudioStudioComponent <a name="NimblestudioStudioComponent" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component awscc_nimblestudio_studio_component}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_studio_component.NimblestudioStudioComponent;

NimblestudioStudioComponent.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .studioId(java.lang.String)
    .type(java.lang.String)
//  .configuration(NimblestudioStudioComponentConfiguration)
//  .description(java.lang.String)
//  .ec2SecurityGroupIds(java.util.List<java.lang.String>)
//  .initializationScripts(IResolvable|java.util.List<NimblestudioStudioComponentInitializationScripts>)
//  .scriptParameters(IResolvable|java.util.List<NimblestudioStudioComponentScriptParameters>)
//  .subtype(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#name NimblestudioStudioComponent#name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.studioId">studioId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#studio_id NimblestudioStudioComponent#studio_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#type NimblestudioStudioComponent#type}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#configuration NimblestudioStudioComponent#configuration}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#description NimblestudioStudioComponent#description}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.ec2SecurityGroupIds">ec2SecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#ec_2_security_group_ids NimblestudioStudioComponent#ec_2_security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.initializationScripts">initializationScripts</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#initialization_scripts NimblestudioStudioComponent#initialization_scripts}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.scriptParameters">scriptParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#script_parameters NimblestudioStudioComponent#script_parameters}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.subtype">subtype</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#subtype NimblestudioStudioComponent#subtype}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#tags NimblestudioStudioComponent#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#name NimblestudioStudioComponent#name}.

---

##### `studioId`<sup>Required</sup> <a name="studioId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.studioId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#studio_id NimblestudioStudioComponent#studio_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#type NimblestudioStudioComponent#type}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#configuration NimblestudioStudioComponent#configuration}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#description NimblestudioStudioComponent#description}.

---

##### `ec2SecurityGroupIds`<sup>Optional</sup> <a name="ec2SecurityGroupIds" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.ec2SecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#ec_2_security_group_ids NimblestudioStudioComponent#ec_2_security_group_ids}.

---

##### `initializationScripts`<sup>Optional</sup> <a name="initializationScripts" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.initializationScripts"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#initialization_scripts NimblestudioStudioComponent#initialization_scripts}.

---

##### `scriptParameters`<sup>Optional</sup> <a name="scriptParameters" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.scriptParameters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#script_parameters NimblestudioStudioComponent#script_parameters}.

---

##### `subtype`<sup>Optional</sup> <a name="subtype" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.subtype"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#subtype NimblestudioStudioComponent#subtype}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#tags NimblestudioStudioComponent#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putInitializationScripts">putInitializationScripts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putScriptParameters">putScriptParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetEc2SecurityGroupIds">resetEc2SecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetInitializationScripts">resetInitializationScripts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetScriptParameters">resetScriptParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetSubtype">resetSubtype</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putConfiguration"></a>

```java
public void putConfiguration(NimblestudioStudioComponentConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a>

---

##### `putInitializationScripts` <a name="putInitializationScripts" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putInitializationScripts"></a>

```java
public void putInitializationScripts(IResolvable|java.util.List<NimblestudioStudioComponentInitializationScripts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putInitializationScripts.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>>

---

##### `putScriptParameters` <a name="putScriptParameters" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putScriptParameters"></a>

```java
public void putScriptParameters(IResolvable|java.util.List<NimblestudioStudioComponentScriptParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putScriptParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>>

---

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEc2SecurityGroupIds` <a name="resetEc2SecurityGroupIds" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetEc2SecurityGroupIds"></a>

```java
public void resetEc2SecurityGroupIds()
```

##### `resetInitializationScripts` <a name="resetInitializationScripts" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetInitializationScripts"></a>

```java
public void resetInitializationScripts()
```

##### `resetScriptParameters` <a name="resetScriptParameters" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetScriptParameters"></a>

```java
public void resetScriptParameters()
```

##### `resetSubtype` <a name="resetSubtype" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetSubtype"></a>

```java
public void resetSubtype()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NimblestudioStudioComponent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isConstruct"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_studio_component.NimblestudioStudioComponent;

NimblestudioStudioComponent.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_studio_component.NimblestudioStudioComponent;

NimblestudioStudioComponent.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_studio_component.NimblestudioStudioComponent;

NimblestudioStudioComponent.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_studio_component.NimblestudioStudioComponent;

NimblestudioStudioComponent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NimblestudioStudioComponent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NimblestudioStudioComponent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NimblestudioStudioComponent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NimblestudioStudioComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NimblestudioStudioComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference">NimblestudioStudioComponentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.initializationScripts">initializationScripts</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList">NimblestudioStudioComponentInitializationScriptsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.scriptParameters">scriptParameters</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList">NimblestudioStudioComponentScriptParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.studioComponentId">studioComponentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.configurationInput">configurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.ec2SecurityGroupIdsInput">ec2SecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.initializationScriptsInput">initializationScriptsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.scriptParametersInput">scriptParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.studioIdInput">studioIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.subtypeInput">subtypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.ec2SecurityGroupIds">ec2SecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.studioId">studioId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.subtype">subtype</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.configuration"></a>

```java
public NimblestudioStudioComponentConfigurationOutputReference getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference">NimblestudioStudioComponentConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `initializationScripts`<sup>Required</sup> <a name="initializationScripts" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.initializationScripts"></a>

```java
public NimblestudioStudioComponentInitializationScriptsList getInitializationScripts();
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList">NimblestudioStudioComponentInitializationScriptsList</a>

---

##### `scriptParameters`<sup>Required</sup> <a name="scriptParameters" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.scriptParameters"></a>

```java
public NimblestudioStudioComponentScriptParametersList getScriptParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList">NimblestudioStudioComponentScriptParametersList</a>

---

##### `studioComponentId`<sup>Required</sup> <a name="studioComponentId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.studioComponentId"></a>

```java
public java.lang.String getStudioComponentId();
```

- *Type:* java.lang.String

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.configurationInput"></a>

```java
public IResolvable|NimblestudioStudioComponentConfiguration getConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `ec2SecurityGroupIdsInput`<sup>Optional</sup> <a name="ec2SecurityGroupIdsInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.ec2SecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getEc2SecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `initializationScriptsInput`<sup>Optional</sup> <a name="initializationScriptsInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.initializationScriptsInput"></a>

```java
public IResolvable|java.util.List<NimblestudioStudioComponentInitializationScripts> getInitializationScriptsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scriptParametersInput`<sup>Optional</sup> <a name="scriptParametersInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.scriptParametersInput"></a>

```java
public IResolvable|java.util.List<NimblestudioStudioComponentScriptParameters> getScriptParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>>

---

##### `studioIdInput`<sup>Optional</sup> <a name="studioIdInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.studioIdInput"></a>

```java
public java.lang.String getStudioIdInput();
```

- *Type:* java.lang.String

---

##### `subtypeInput`<sup>Optional</sup> <a name="subtypeInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.subtypeInput"></a>

```java
public java.lang.String getSubtypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `ec2SecurityGroupIds`<sup>Required</sup> <a name="ec2SecurityGroupIds" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.ec2SecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getEc2SecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `studioId`<sup>Required</sup> <a name="studioId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.studioId"></a>

```java
public java.lang.String getStudioId();
```

- *Type:* java.lang.String

---

##### `subtype`<sup>Required</sup> <a name="subtype" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.subtype"></a>

```java
public java.lang.String getSubtype();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NimblestudioStudioComponentConfig <a name="NimblestudioStudioComponentConfig" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_studio_component.NimblestudioStudioComponentConfig;

NimblestudioStudioComponentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .studioId(java.lang.String)
    .type(java.lang.String)
//  .configuration(NimblestudioStudioComponentConfiguration)
//  .description(java.lang.String)
//  .ec2SecurityGroupIds(java.util.List<java.lang.String>)
//  .initializationScripts(IResolvable|java.util.List<NimblestudioStudioComponentInitializationScripts>)
//  .scriptParameters(IResolvable|java.util.List<NimblestudioStudioComponentScriptParameters>)
//  .subtype(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#name NimblestudioStudioComponent#name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.studioId">studioId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#studio_id NimblestudioStudioComponent#studio_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#type NimblestudioStudioComponent#type}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#configuration NimblestudioStudioComponent#configuration}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#description NimblestudioStudioComponent#description}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.ec2SecurityGroupIds">ec2SecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#ec_2_security_group_ids NimblestudioStudioComponent#ec_2_security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.initializationScripts">initializationScripts</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#initialization_scripts NimblestudioStudioComponent#initialization_scripts}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.scriptParameters">scriptParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#script_parameters NimblestudioStudioComponent#script_parameters}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.subtype">subtype</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#subtype NimblestudioStudioComponent#subtype}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#tags NimblestudioStudioComponent#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#name NimblestudioStudioComponent#name}.

---

##### `studioId`<sup>Required</sup> <a name="studioId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.studioId"></a>

```java
public java.lang.String getStudioId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#studio_id NimblestudioStudioComponent#studio_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#type NimblestudioStudioComponent#type}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.configuration"></a>

```java
public NimblestudioStudioComponentConfiguration getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#configuration NimblestudioStudioComponent#configuration}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#description NimblestudioStudioComponent#description}.

---

##### `ec2SecurityGroupIds`<sup>Optional</sup> <a name="ec2SecurityGroupIds" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.ec2SecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getEc2SecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#ec_2_security_group_ids NimblestudioStudioComponent#ec_2_security_group_ids}.

---

##### `initializationScripts`<sup>Optional</sup> <a name="initializationScripts" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.initializationScripts"></a>

```java
public IResolvable|java.util.List<NimblestudioStudioComponentInitializationScripts> getInitializationScripts();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#initialization_scripts NimblestudioStudioComponent#initialization_scripts}.

---

##### `scriptParameters`<sup>Optional</sup> <a name="scriptParameters" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.scriptParameters"></a>

```java
public IResolvable|java.util.List<NimblestudioStudioComponentScriptParameters> getScriptParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#script_parameters NimblestudioStudioComponent#script_parameters}.

---

##### `subtype`<sup>Optional</sup> <a name="subtype" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.subtype"></a>

```java
public java.lang.String getSubtype();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#subtype NimblestudioStudioComponent#subtype}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#tags NimblestudioStudioComponent#tags}.

---

### NimblestudioStudioComponentConfiguration <a name="NimblestudioStudioComponentConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_studio_component.NimblestudioStudioComponentConfiguration;

NimblestudioStudioComponentConfiguration.builder()
//  .activeDirectoryConfiguration(NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration)
//  .computeFarmConfiguration(NimblestudioStudioComponentConfigurationComputeFarmConfiguration)
//  .licenseServiceConfiguration(NimblestudioStudioComponentConfigurationLicenseServiceConfiguration)
//  .sharedFileSystemConfiguration(NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.activeDirectoryConfiguration">activeDirectoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#active_directory_configuration NimblestudioStudioComponent#active_directory_configuration}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.computeFarmConfiguration">computeFarmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#compute_farm_configuration NimblestudioStudioComponent#compute_farm_configuration}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.licenseServiceConfiguration">licenseServiceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#license_service_configuration NimblestudioStudioComponent#license_service_configuration}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.sharedFileSystemConfiguration">sharedFileSystemConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#shared_file_system_configuration NimblestudioStudioComponent#shared_file_system_configuration}. |

---

##### `activeDirectoryConfiguration`<sup>Optional</sup> <a name="activeDirectoryConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.activeDirectoryConfiguration"></a>

```java
public NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration getActiveDirectoryConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#active_directory_configuration NimblestudioStudioComponent#active_directory_configuration}.

---

##### `computeFarmConfiguration`<sup>Optional</sup> <a name="computeFarmConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.computeFarmConfiguration"></a>

```java
public NimblestudioStudioComponentConfigurationComputeFarmConfiguration getComputeFarmConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#compute_farm_configuration NimblestudioStudioComponent#compute_farm_configuration}.

---

##### `licenseServiceConfiguration`<sup>Optional</sup> <a name="licenseServiceConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.licenseServiceConfiguration"></a>

```java
public NimblestudioStudioComponentConfigurationLicenseServiceConfiguration getLicenseServiceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#license_service_configuration NimblestudioStudioComponent#license_service_configuration}.

---

##### `sharedFileSystemConfiguration`<sup>Optional</sup> <a name="sharedFileSystemConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.sharedFileSystemConfiguration"></a>

```java
public NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration getSharedFileSystemConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#shared_file_system_configuration NimblestudioStudioComponent#shared_file_system_configuration}.

---

### NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration <a name="NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_studio_component.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration;

NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.builder()
//  .computerAttributes(IResolvable|java.util.List<NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes>)
//  .directoryId(java.lang.String)
//  .organizationalUnitDistinguishedName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.property.computerAttributes">computerAttributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#computer_attributes NimblestudioStudioComponent#computer_attributes}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#directory_id NimblestudioStudioComponent#directory_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.property.organizationalUnitDistinguishedName">organizationalUnitDistinguishedName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#organizational_unit_distinguished_name NimblestudioStudioComponent#organizational_unit_distinguished_name}. |

---

##### `computerAttributes`<sup>Optional</sup> <a name="computerAttributes" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.property.computerAttributes"></a>

```java
public IResolvable|java.util.List<NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes> getComputerAttributes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#computer_attributes NimblestudioStudioComponent#computer_attributes}.

---

##### `directoryId`<sup>Optional</sup> <a name="directoryId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#directory_id NimblestudioStudioComponent#directory_id}.

---

##### `organizationalUnitDistinguishedName`<sup>Optional</sup> <a name="organizationalUnitDistinguishedName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.property.organizationalUnitDistinguishedName"></a>

```java
public java.lang.String getOrganizationalUnitDistinguishedName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#organizational_unit_distinguished_name NimblestudioStudioComponent#organizational_unit_distinguished_name}.

---

### NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes <a name="NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_studio_component.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes;

NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#name NimblestudioStudioComponent#name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#value NimblestudioStudioComponent#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#name NimblestudioStudioComponent#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#value NimblestudioStudioComponent#value}.

---

### NimblestudioStudioComponentConfigurationComputeFarmConfiguration <a name="NimblestudioStudioComponentConfigurationComputeFarmConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_studio_component.NimblestudioStudioComponentConfigurationComputeFarmConfiguration;

NimblestudioStudioComponentConfigurationComputeFarmConfiguration.builder()
//  .activeDirectoryUser(java.lang.String)
//  .endpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration.property.activeDirectoryUser">activeDirectoryUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#active_directory_user NimblestudioStudioComponent#active_directory_user}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#endpoint NimblestudioStudioComponent#endpoint}. |

---

##### `activeDirectoryUser`<sup>Optional</sup> <a name="activeDirectoryUser" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration.property.activeDirectoryUser"></a>

```java
public java.lang.String getActiveDirectoryUser();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#active_directory_user NimblestudioStudioComponent#active_directory_user}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#endpoint NimblestudioStudioComponent#endpoint}.

---

### NimblestudioStudioComponentConfigurationLicenseServiceConfiguration <a name="NimblestudioStudioComponentConfigurationLicenseServiceConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_studio_component.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration;

NimblestudioStudioComponentConfigurationLicenseServiceConfiguration.builder()
//  .endpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#endpoint NimblestudioStudioComponent#endpoint}. |

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#endpoint NimblestudioStudioComponent#endpoint}.

---

### NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration <a name="NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_studio_component.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration;

NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.builder()
//  .endpoint(java.lang.String)
//  .fileSystemId(java.lang.String)
//  .linuxMountPoint(java.lang.String)
//  .shareName(java.lang.String)
//  .windowsMountDrive(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#endpoint NimblestudioStudioComponent#endpoint}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#file_system_id NimblestudioStudioComponent#file_system_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.linuxMountPoint">linuxMountPoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#linux_mount_point NimblestudioStudioComponent#linux_mount_point}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.shareName">shareName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#share_name NimblestudioStudioComponent#share_name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.windowsMountDrive">windowsMountDrive</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#windows_mount_drive NimblestudioStudioComponent#windows_mount_drive}. |

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#endpoint NimblestudioStudioComponent#endpoint}.

---

##### `fileSystemId`<sup>Optional</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#file_system_id NimblestudioStudioComponent#file_system_id}.

---

##### `linuxMountPoint`<sup>Optional</sup> <a name="linuxMountPoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.linuxMountPoint"></a>

```java
public java.lang.String getLinuxMountPoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#linux_mount_point NimblestudioStudioComponent#linux_mount_point}.

---

##### `shareName`<sup>Optional</sup> <a name="shareName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.shareName"></a>

```java
public java.lang.String getShareName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#share_name NimblestudioStudioComponent#share_name}.

---

##### `windowsMountDrive`<sup>Optional</sup> <a name="windowsMountDrive" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.windowsMountDrive"></a>

```java
public java.lang.String getWindowsMountDrive();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#windows_mount_drive NimblestudioStudioComponent#windows_mount_drive}.

---

### NimblestudioStudioComponentInitializationScripts <a name="NimblestudioStudioComponentInitializationScripts" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_studio_component.NimblestudioStudioComponentInitializationScripts;

NimblestudioStudioComponentInitializationScripts.builder()
//  .launchProfileProtocolVersion(java.lang.String)
//  .platform(java.lang.String)
//  .runContext(java.lang.String)
//  .script(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.launchProfileProtocolVersion">launchProfileProtocolVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#launch_profile_protocol_version NimblestudioStudioComponent#launch_profile_protocol_version}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.platform">platform</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#platform NimblestudioStudioComponent#platform}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.runContext">runContext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#run_context NimblestudioStudioComponent#run_context}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.script">script</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#script NimblestudioStudioComponent#script}. |

---

##### `launchProfileProtocolVersion`<sup>Optional</sup> <a name="launchProfileProtocolVersion" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.launchProfileProtocolVersion"></a>

```java
public java.lang.String getLaunchProfileProtocolVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#launch_profile_protocol_version NimblestudioStudioComponent#launch_profile_protocol_version}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#platform NimblestudioStudioComponent#platform}.

---

##### `runContext`<sup>Optional</sup> <a name="runContext" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.runContext"></a>

```java
public java.lang.String getRunContext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#run_context NimblestudioStudioComponent#run_context}.

---

##### `script`<sup>Optional</sup> <a name="script" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.script"></a>

```java
public java.lang.String getScript();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#script NimblestudioStudioComponent#script}.

---

### NimblestudioStudioComponentScriptParameters <a name="NimblestudioStudioComponentScriptParameters" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_studio_component.NimblestudioStudioComponentScriptParameters;

NimblestudioStudioComponentScriptParameters.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#key NimblestudioStudioComponent#key}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#value NimblestudioStudioComponent#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#key NimblestudioStudioComponent#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_studio_component#value NimblestudioStudioComponent#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList <a name="NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_studio_component.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList;

new NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.get"></a>

```java
public NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>>

---


### NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference <a name="NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_studio_component.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference;

new NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>

---


### NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference <a name="NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_studio_component.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference;

new NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.putComputerAttributes">putComputerAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resetComputerAttributes">resetComputerAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resetDirectoryId">resetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resetOrganizationalUnitDistinguishedName">resetOrganizationalUnitDistinguishedName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putComputerAttributes` <a name="putComputerAttributes" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.putComputerAttributes"></a>

```java
public void putComputerAttributes(IResolvable|java.util.List<NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.putComputerAttributes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>>

---

##### `resetComputerAttributes` <a name="resetComputerAttributes" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resetComputerAttributes"></a>

```java
public void resetComputerAttributes()
```

##### `resetDirectoryId` <a name="resetDirectoryId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resetDirectoryId"></a>

```java
public void resetDirectoryId()
```

##### `resetOrganizationalUnitDistinguishedName` <a name="resetOrganizationalUnitDistinguishedName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resetOrganizationalUnitDistinguishedName"></a>

```java
public void resetOrganizationalUnitDistinguishedName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.computerAttributes">computerAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.computerAttributesInput">computerAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.directoryIdInput">directoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedNameInput">organizationalUnitDistinguishedNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedName">organizationalUnitDistinguishedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `computerAttributes`<sup>Required</sup> <a name="computerAttributes" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.computerAttributes"></a>

```java
public NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList getComputerAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList</a>

---

##### `computerAttributesInput`<sup>Optional</sup> <a name="computerAttributesInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.computerAttributesInput"></a>

```java
public IResolvable|java.util.List<NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes> getComputerAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>>

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.directoryIdInput"></a>

```java
public java.lang.String getDirectoryIdInput();
```

- *Type:* java.lang.String

---

##### `organizationalUnitDistinguishedNameInput`<sup>Optional</sup> <a name="organizationalUnitDistinguishedNameInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedNameInput"></a>

```java
public java.lang.String getOrganizationalUnitDistinguishedNameInput();
```

- *Type:* java.lang.String

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

---

##### `organizationalUnitDistinguishedName`<sup>Required</sup> <a name="organizationalUnitDistinguishedName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedName"></a>

```java
public java.lang.String getOrganizationalUnitDistinguishedName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a>

---


### NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference <a name="NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_studio_component.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference;

new NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resetActiveDirectoryUser">resetActiveDirectoryUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActiveDirectoryUser` <a name="resetActiveDirectoryUser" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resetActiveDirectoryUser"></a>

```java
public void resetActiveDirectoryUser()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resetEndpoint"></a>

```java
public void resetEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.activeDirectoryUserInput">activeDirectoryUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.activeDirectoryUser">activeDirectoryUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeDirectoryUserInput`<sup>Optional</sup> <a name="activeDirectoryUserInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.activeDirectoryUserInput"></a>

```java
public java.lang.String getActiveDirectoryUserInput();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `activeDirectoryUser`<sup>Required</sup> <a name="activeDirectoryUser" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.activeDirectoryUser"></a>

```java
public java.lang.String getActiveDirectoryUser();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|NimblestudioStudioComponentConfigurationComputeFarmConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a>

---


### NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference <a name="NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_studio_component.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference;

new NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resetEndpoint"></a>

```java
public void resetEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|NimblestudioStudioComponentConfigurationLicenseServiceConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a>

---


### NimblestudioStudioComponentConfigurationOutputReference <a name="NimblestudioStudioComponentConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_studio_component.NimblestudioStudioComponentConfigurationOutputReference;

new NimblestudioStudioComponentConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putActiveDirectoryConfiguration">putActiveDirectoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putComputeFarmConfiguration">putComputeFarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putLicenseServiceConfiguration">putLicenseServiceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putSharedFileSystemConfiguration">putSharedFileSystemConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetActiveDirectoryConfiguration">resetActiveDirectoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetComputeFarmConfiguration">resetComputeFarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetLicenseServiceConfiguration">resetLicenseServiceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetSharedFileSystemConfiguration">resetSharedFileSystemConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActiveDirectoryConfiguration` <a name="putActiveDirectoryConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putActiveDirectoryConfiguration"></a>

```java
public void putActiveDirectoryConfiguration(NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putActiveDirectoryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a>

---

##### `putComputeFarmConfiguration` <a name="putComputeFarmConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putComputeFarmConfiguration"></a>

```java
public void putComputeFarmConfiguration(NimblestudioStudioComponentConfigurationComputeFarmConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putComputeFarmConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a>

---

##### `putLicenseServiceConfiguration` <a name="putLicenseServiceConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putLicenseServiceConfiguration"></a>

```java
public void putLicenseServiceConfiguration(NimblestudioStudioComponentConfigurationLicenseServiceConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putLicenseServiceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a>

---

##### `putSharedFileSystemConfiguration` <a name="putSharedFileSystemConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putSharedFileSystemConfiguration"></a>

```java
public void putSharedFileSystemConfiguration(NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putSharedFileSystemConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a>

---

##### `resetActiveDirectoryConfiguration` <a name="resetActiveDirectoryConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetActiveDirectoryConfiguration"></a>

```java
public void resetActiveDirectoryConfiguration()
```

##### `resetComputeFarmConfiguration` <a name="resetComputeFarmConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetComputeFarmConfiguration"></a>

```java
public void resetComputeFarmConfiguration()
```

##### `resetLicenseServiceConfiguration` <a name="resetLicenseServiceConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetLicenseServiceConfiguration"></a>

```java
public void resetLicenseServiceConfiguration()
```

##### `resetSharedFileSystemConfiguration` <a name="resetSharedFileSystemConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetSharedFileSystemConfiguration"></a>

```java
public void resetSharedFileSystemConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.activeDirectoryConfiguration">activeDirectoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.computeFarmConfiguration">computeFarmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference">NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.licenseServiceConfiguration">licenseServiceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference">NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.sharedFileSystemConfiguration">sharedFileSystemConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference">NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.activeDirectoryConfigurationInput">activeDirectoryConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.computeFarmConfigurationInput">computeFarmConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.licenseServiceConfigurationInput">licenseServiceConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.sharedFileSystemConfigurationInput">sharedFileSystemConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeDirectoryConfiguration`<sup>Required</sup> <a name="activeDirectoryConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.activeDirectoryConfiguration"></a>

```java
public NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference getActiveDirectoryConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference</a>

---

##### `computeFarmConfiguration`<sup>Required</sup> <a name="computeFarmConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.computeFarmConfiguration"></a>

```java
public NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference getComputeFarmConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference">NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference</a>

---

##### `licenseServiceConfiguration`<sup>Required</sup> <a name="licenseServiceConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.licenseServiceConfiguration"></a>

```java
public NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference getLicenseServiceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference">NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference</a>

---

##### `sharedFileSystemConfiguration`<sup>Required</sup> <a name="sharedFileSystemConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.sharedFileSystemConfiguration"></a>

```java
public NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference getSharedFileSystemConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference">NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference</a>

---

##### `activeDirectoryConfigurationInput`<sup>Optional</sup> <a name="activeDirectoryConfigurationInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.activeDirectoryConfigurationInput"></a>

```java
public IResolvable|NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration getActiveDirectoryConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a>

---

##### `computeFarmConfigurationInput`<sup>Optional</sup> <a name="computeFarmConfigurationInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.computeFarmConfigurationInput"></a>

```java
public IResolvable|NimblestudioStudioComponentConfigurationComputeFarmConfiguration getComputeFarmConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a>

---

##### `licenseServiceConfigurationInput`<sup>Optional</sup> <a name="licenseServiceConfigurationInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.licenseServiceConfigurationInput"></a>

```java
public IResolvable|NimblestudioStudioComponentConfigurationLicenseServiceConfiguration getLicenseServiceConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a>

---

##### `sharedFileSystemConfigurationInput`<sup>Optional</sup> <a name="sharedFileSystemConfigurationInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.sharedFileSystemConfigurationInput"></a>

```java
public IResolvable|NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration getSharedFileSystemConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|NimblestudioStudioComponentConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a>

---


### NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference <a name="NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_studio_component.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference;

new NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetFileSystemId">resetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetLinuxMountPoint">resetLinuxMountPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetShareName">resetShareName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetWindowsMountDrive">resetWindowsMountDrive</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetFileSystemId` <a name="resetFileSystemId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetFileSystemId"></a>

```java
public void resetFileSystemId()
```

##### `resetLinuxMountPoint` <a name="resetLinuxMountPoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetLinuxMountPoint"></a>

```java
public void resetLinuxMountPoint()
```

##### `resetShareName` <a name="resetShareName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetShareName"></a>

```java
public void resetShareName()
```

##### `resetWindowsMountDrive` <a name="resetWindowsMountDrive" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetWindowsMountDrive"></a>

```java
public void resetWindowsMountDrive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.linuxMountPointInput">linuxMountPointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.shareNameInput">shareNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.windowsMountDriveInput">windowsMountDriveInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.linuxMountPoint">linuxMountPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.shareName">shareName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.windowsMountDrive">windowsMountDrive</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fileSystemIdInput"></a>

```java
public java.lang.String getFileSystemIdInput();
```

- *Type:* java.lang.String

---

##### `linuxMountPointInput`<sup>Optional</sup> <a name="linuxMountPointInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.linuxMountPointInput"></a>

```java
public java.lang.String getLinuxMountPointInput();
```

- *Type:* java.lang.String

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.shareNameInput"></a>

```java
public java.lang.String getShareNameInput();
```

- *Type:* java.lang.String

---

##### `windowsMountDriveInput`<sup>Optional</sup> <a name="windowsMountDriveInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.windowsMountDriveInput"></a>

```java
public java.lang.String getWindowsMountDriveInput();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

---

##### `linuxMountPoint`<sup>Required</sup> <a name="linuxMountPoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.linuxMountPoint"></a>

```java
public java.lang.String getLinuxMountPoint();
```

- *Type:* java.lang.String

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.shareName"></a>

```java
public java.lang.String getShareName();
```

- *Type:* java.lang.String

---

##### `windowsMountDrive`<sup>Required</sup> <a name="windowsMountDrive" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.windowsMountDrive"></a>

```java
public java.lang.String getWindowsMountDrive();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a>

---


### NimblestudioStudioComponentInitializationScriptsList <a name="NimblestudioStudioComponentInitializationScriptsList" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_studio_component.NimblestudioStudioComponentInitializationScriptsList;

new NimblestudioStudioComponentInitializationScriptsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.get"></a>

```java
public NimblestudioStudioComponentInitializationScriptsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NimblestudioStudioComponentInitializationScripts> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>>

---


### NimblestudioStudioComponentInitializationScriptsOutputReference <a name="NimblestudioStudioComponentInitializationScriptsOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_studio_component.NimblestudioStudioComponentInitializationScriptsOutputReference;

new NimblestudioStudioComponentInitializationScriptsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetLaunchProfileProtocolVersion">resetLaunchProfileProtocolVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetPlatform">resetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetRunContext">resetRunContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetScript">resetScript</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLaunchProfileProtocolVersion` <a name="resetLaunchProfileProtocolVersion" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetLaunchProfileProtocolVersion"></a>

```java
public void resetLaunchProfileProtocolVersion()
```

##### `resetPlatform` <a name="resetPlatform" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetPlatform"></a>

```java
public void resetPlatform()
```

##### `resetRunContext` <a name="resetRunContext" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetRunContext"></a>

```java
public void resetRunContext()
```

##### `resetScript` <a name="resetScript" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetScript"></a>

```java
public void resetScript()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.launchProfileProtocolVersionInput">launchProfileProtocolVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.platformInput">platformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.runContextInput">runContextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.scriptInput">scriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.launchProfileProtocolVersion">launchProfileProtocolVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.platform">platform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.runContext">runContext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.script">script</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `launchProfileProtocolVersionInput`<sup>Optional</sup> <a name="launchProfileProtocolVersionInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.launchProfileProtocolVersionInput"></a>

```java
public java.lang.String getLaunchProfileProtocolVersionInput();
```

- *Type:* java.lang.String

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.platformInput"></a>

```java
public java.lang.String getPlatformInput();
```

- *Type:* java.lang.String

---

##### `runContextInput`<sup>Optional</sup> <a name="runContextInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.runContextInput"></a>

```java
public java.lang.String getRunContextInput();
```

- *Type:* java.lang.String

---

##### `scriptInput`<sup>Optional</sup> <a name="scriptInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.scriptInput"></a>

```java
public java.lang.String getScriptInput();
```

- *Type:* java.lang.String

---

##### `launchProfileProtocolVersion`<sup>Required</sup> <a name="launchProfileProtocolVersion" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.launchProfileProtocolVersion"></a>

```java
public java.lang.String getLaunchProfileProtocolVersion();
```

- *Type:* java.lang.String

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

---

##### `runContext`<sup>Required</sup> <a name="runContext" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.runContext"></a>

```java
public java.lang.String getRunContext();
```

- *Type:* java.lang.String

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.script"></a>

```java
public java.lang.String getScript();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.internalValue"></a>

```java
public IResolvable|NimblestudioStudioComponentInitializationScripts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>

---


### NimblestudioStudioComponentScriptParametersList <a name="NimblestudioStudioComponentScriptParametersList" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_studio_component.NimblestudioStudioComponentScriptParametersList;

new NimblestudioStudioComponentScriptParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.get"></a>

```java
public NimblestudioStudioComponentScriptParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NimblestudioStudioComponentScriptParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>>

---


### NimblestudioStudioComponentScriptParametersOutputReference <a name="NimblestudioStudioComponentScriptParametersOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_studio_component.NimblestudioStudioComponentScriptParametersOutputReference;

new NimblestudioStudioComponentScriptParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|NimblestudioStudioComponentScriptParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>

---



