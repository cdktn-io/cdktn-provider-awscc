# `pinpointInAppTemplate` Submodule <a name="`pinpointInAppTemplate` Submodule" id="@cdktn/provider-awscc.pinpointInAppTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointInAppTemplate <a name="PinpointInAppTemplate" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template awscc_pinpoint_in_app_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplate;

PinpointInAppTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .templateName(java.lang.String)
//  .content(IResolvable|java.util.List<PinpointInAppTemplateContent>)
//  .customConfig(java.lang.String)
//  .layout(java.lang.String)
//  .tags(java.lang.String)
//  .templateDescription(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.templateName">templateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#template_name PinpointInAppTemplate#template_name}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.content">content</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#content PinpointInAppTemplate#content}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.customConfig">customConfig</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#custom_config PinpointInAppTemplate#custom_config}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.layout">layout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#layout PinpointInAppTemplate#layout}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.tags">tags</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#tags PinpointInAppTemplate#tags}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.templateDescription">templateDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#template_description PinpointInAppTemplate#template_description}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.templateName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#template_name PinpointInAppTemplate#template_name}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.content"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#content PinpointInAppTemplate#content}.

---

##### `customConfig`<sup>Optional</sup> <a name="customConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.customConfig"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#custom_config PinpointInAppTemplate#custom_config}.

---

##### `layout`<sup>Optional</sup> <a name="layout" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.layout"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#layout PinpointInAppTemplate#layout}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.tags"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#tags PinpointInAppTemplate#tags}.

---

##### `templateDescription`<sup>Optional</sup> <a name="templateDescription" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.templateDescription"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#template_description PinpointInAppTemplate#template_description}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.putContent">putContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetCustomConfig">resetCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetLayout">resetLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetTemplateDescription">resetTemplateDescription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContent` <a name="putContent" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.putContent"></a>

```java
public void putContent(IResolvable|java.util.List<PinpointInAppTemplateContent> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.putContent.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>>

---

##### `resetContent` <a name="resetContent" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetContent"></a>

```java
public void resetContent()
```

##### `resetCustomConfig` <a name="resetCustomConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetCustomConfig"></a>

```java
public void resetCustomConfig()
```

##### `resetLayout` <a name="resetLayout" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetLayout"></a>

```java
public void resetLayout()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetTags"></a>

```java
public void resetTags()
```

##### `resetTemplateDescription` <a name="resetTemplateDescription" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetTemplateDescription"></a>

```java
public void resetTemplateDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PinpointInAppTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isConstruct"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplate;

PinpointInAppTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplate;

PinpointInAppTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplate;

PinpointInAppTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplate;

PinpointInAppTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PinpointInAppTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PinpointInAppTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PinpointInAppTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PinpointInAppTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PinpointInAppTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList">PinpointInAppTemplateContentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.contentInput">contentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.customConfigInput">customConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.layoutInput">layoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tagsInput">tagsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateDescriptionInput">templateDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateNameInput">templateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.customConfig">customConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.layout">layout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tags">tags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateDescription">templateDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateName">templateName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.content"></a>

```java
public PinpointInAppTemplateContentList getContent();
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList">PinpointInAppTemplateContentList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.contentInput"></a>

```java
public IResolvable|java.util.List<PinpointInAppTemplateContent> getContentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>>

---

##### `customConfigInput`<sup>Optional</sup> <a name="customConfigInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.customConfigInput"></a>

```java
public java.lang.String getCustomConfigInput();
```

- *Type:* java.lang.String

---

##### `layoutInput`<sup>Optional</sup> <a name="layoutInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.layoutInput"></a>

```java
public java.lang.String getLayoutInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tagsInput"></a>

```java
public java.lang.String getTagsInput();
```

- *Type:* java.lang.String

---

##### `templateDescriptionInput`<sup>Optional</sup> <a name="templateDescriptionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateDescriptionInput"></a>

```java
public java.lang.String getTemplateDescriptionInput();
```

- *Type:* java.lang.String

---

##### `templateNameInput`<sup>Optional</sup> <a name="templateNameInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateNameInput"></a>

```java
public java.lang.String getTemplateNameInput();
```

- *Type:* java.lang.String

---

##### `customConfig`<sup>Required</sup> <a name="customConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.customConfig"></a>

```java
public java.lang.String getCustomConfig();
```

- *Type:* java.lang.String

---

##### `layout`<sup>Required</sup> <a name="layout" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.layout"></a>

```java
public java.lang.String getLayout();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tags"></a>

```java
public java.lang.String getTags();
```

- *Type:* java.lang.String

---

##### `templateDescription`<sup>Required</sup> <a name="templateDescription" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateDescription"></a>

```java
public java.lang.String getTemplateDescription();
```

- *Type:* java.lang.String

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateName"></a>

```java
public java.lang.String getTemplateName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointInAppTemplateConfig <a name="PinpointInAppTemplateConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateConfig;

PinpointInAppTemplateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .templateName(java.lang.String)
//  .content(IResolvable|java.util.List<PinpointInAppTemplateContent>)
//  .customConfig(java.lang.String)
//  .layout(java.lang.String)
//  .tags(java.lang.String)
//  .templateDescription(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.templateName">templateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#template_name PinpointInAppTemplate#template_name}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.content">content</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#content PinpointInAppTemplate#content}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.customConfig">customConfig</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#custom_config PinpointInAppTemplate#custom_config}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.layout">layout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#layout PinpointInAppTemplate#layout}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.tags">tags</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#tags PinpointInAppTemplate#tags}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.templateDescription">templateDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#template_description PinpointInAppTemplate#template_description}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.templateName"></a>

```java
public java.lang.String getTemplateName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#template_name PinpointInAppTemplate#template_name}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.content"></a>

```java
public IResolvable|java.util.List<PinpointInAppTemplateContent> getContent();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#content PinpointInAppTemplate#content}.

---

##### `customConfig`<sup>Optional</sup> <a name="customConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.customConfig"></a>

```java
public java.lang.String getCustomConfig();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#custom_config PinpointInAppTemplate#custom_config}.

---

##### `layout`<sup>Optional</sup> <a name="layout" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.layout"></a>

```java
public java.lang.String getLayout();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#layout PinpointInAppTemplate#layout}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.tags"></a>

```java
public java.lang.String getTags();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#tags PinpointInAppTemplate#tags}.

---

##### `templateDescription`<sup>Optional</sup> <a name="templateDescription" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.templateDescription"></a>

```java
public java.lang.String getTemplateDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#template_description PinpointInAppTemplate#template_description}.

---

### PinpointInAppTemplateContent <a name="PinpointInAppTemplateContent" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateContent;

PinpointInAppTemplateContent.builder()
//  .backgroundColor(java.lang.String)
//  .bodyConfig(PinpointInAppTemplateContentBodyConfig)
//  .headerConfig(PinpointInAppTemplateContentHeaderConfig)
//  .imageUrl(java.lang.String)
//  .primaryBtn(PinpointInAppTemplateContentPrimaryBtn)
//  .secondaryBtn(PinpointInAppTemplateContentSecondaryBtn)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.backgroundColor">backgroundColor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.bodyConfig">bodyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#body_config PinpointInAppTemplate#body_config}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.headerConfig">headerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#header_config PinpointInAppTemplate#header_config}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.imageUrl">imageUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#image_url PinpointInAppTemplate#image_url}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.primaryBtn">primaryBtn</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#primary_btn PinpointInAppTemplate#primary_btn}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.secondaryBtn">secondaryBtn</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#secondary_btn PinpointInAppTemplate#secondary_btn}. |

---

##### `backgroundColor`<sup>Optional</sup> <a name="backgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.backgroundColor"></a>

```java
public java.lang.String getBackgroundColor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}.

---

##### `bodyConfig`<sup>Optional</sup> <a name="bodyConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.bodyConfig"></a>

```java
public PinpointInAppTemplateContentBodyConfig getBodyConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#body_config PinpointInAppTemplate#body_config}.

---

##### `headerConfig`<sup>Optional</sup> <a name="headerConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.headerConfig"></a>

```java
public PinpointInAppTemplateContentHeaderConfig getHeaderConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#header_config PinpointInAppTemplate#header_config}.

---

##### `imageUrl`<sup>Optional</sup> <a name="imageUrl" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.imageUrl"></a>

```java
public java.lang.String getImageUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#image_url PinpointInAppTemplate#image_url}.

---

##### `primaryBtn`<sup>Optional</sup> <a name="primaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.primaryBtn"></a>

```java
public PinpointInAppTemplateContentPrimaryBtn getPrimaryBtn();
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#primary_btn PinpointInAppTemplate#primary_btn}.

---

##### `secondaryBtn`<sup>Optional</sup> <a name="secondaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.secondaryBtn"></a>

```java
public PinpointInAppTemplateContentSecondaryBtn getSecondaryBtn();
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#secondary_btn PinpointInAppTemplate#secondary_btn}.

---

### PinpointInAppTemplateContentBodyConfig <a name="PinpointInAppTemplateContentBodyConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateContentBodyConfig;

PinpointInAppTemplateContentBodyConfig.builder()
//  .alignment(java.lang.String)
//  .body(java.lang.String)
//  .textColor(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.alignment">alignment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#alignment PinpointInAppTemplate#alignment}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.body">body</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#body PinpointInAppTemplate#body}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.textColor">textColor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}. |

---

##### `alignment`<sup>Optional</sup> <a name="alignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.alignment"></a>

```java
public java.lang.String getAlignment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#alignment PinpointInAppTemplate#alignment}.

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#body PinpointInAppTemplate#body}.

---

##### `textColor`<sup>Optional</sup> <a name="textColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.textColor"></a>

```java
public java.lang.String getTextColor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}.

---

### PinpointInAppTemplateContentHeaderConfig <a name="PinpointInAppTemplateContentHeaderConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateContentHeaderConfig;

PinpointInAppTemplateContentHeaderConfig.builder()
//  .alignment(java.lang.String)
//  .header(java.lang.String)
//  .textColor(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.alignment">alignment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#alignment PinpointInAppTemplate#alignment}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.header">header</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#header PinpointInAppTemplate#header}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.textColor">textColor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}. |

---

##### `alignment`<sup>Optional</sup> <a name="alignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.alignment"></a>

```java
public java.lang.String getAlignment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#alignment PinpointInAppTemplate#alignment}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.header"></a>

```java
public java.lang.String getHeader();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#header PinpointInAppTemplate#header}.

---

##### `textColor`<sup>Optional</sup> <a name="textColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.textColor"></a>

```java
public java.lang.String getTextColor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}.

---

### PinpointInAppTemplateContentPrimaryBtn <a name="PinpointInAppTemplateContentPrimaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateContentPrimaryBtn;

PinpointInAppTemplateContentPrimaryBtn.builder()
//  .android(PinpointInAppTemplateContentPrimaryBtnAndroid)
//  .defaultConfig(PinpointInAppTemplateContentPrimaryBtnDefaultConfig)
//  .ios(PinpointInAppTemplateContentPrimaryBtnIos)
//  .web(PinpointInAppTemplateContentPrimaryBtnWeb)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.android">android</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#android PinpointInAppTemplate#android}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.defaultConfig">defaultConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#default_config PinpointInAppTemplate#default_config}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.ios">ios</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#ios PinpointInAppTemplate#ios}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.web">web</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#web PinpointInAppTemplate#web}. |

---

##### `android`<sup>Optional</sup> <a name="android" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.android"></a>

```java
public PinpointInAppTemplateContentPrimaryBtnAndroid getAndroid();
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#android PinpointInAppTemplate#android}.

---

##### `defaultConfig`<sup>Optional</sup> <a name="defaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.defaultConfig"></a>

```java
public PinpointInAppTemplateContentPrimaryBtnDefaultConfig getDefaultConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#default_config PinpointInAppTemplate#default_config}.

---

##### `ios`<sup>Optional</sup> <a name="ios" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.ios"></a>

```java
public PinpointInAppTemplateContentPrimaryBtnIos getIos();
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#ios PinpointInAppTemplate#ios}.

---

##### `web`<sup>Optional</sup> <a name="web" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.web"></a>

```java
public PinpointInAppTemplateContentPrimaryBtnWeb getWeb();
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#web PinpointInAppTemplate#web}.

---

### PinpointInAppTemplateContentPrimaryBtnAndroid <a name="PinpointInAppTemplateContentPrimaryBtnAndroid" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateContentPrimaryBtnAndroid;

PinpointInAppTemplateContentPrimaryBtnAndroid.builder()
//  .buttonAction(java.lang.String)
//  .link(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid.property.buttonAction">buttonAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid.property.link">link</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `buttonAction`<sup>Optional</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid.property.buttonAction"></a>

```java
public java.lang.String getButtonAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid.property.link"></a>

```java
public java.lang.String getLink();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

### PinpointInAppTemplateContentPrimaryBtnDefaultConfig <a name="PinpointInAppTemplateContentPrimaryBtnDefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateContentPrimaryBtnDefaultConfig;

PinpointInAppTemplateContentPrimaryBtnDefaultConfig.builder()
//  .backgroundColor(java.lang.String)
//  .borderRadius(java.lang.Number)
//  .buttonAction(java.lang.String)
//  .link(java.lang.String)
//  .text(java.lang.String)
//  .textColor(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.backgroundColor">backgroundColor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.borderRadius">borderRadius</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#border_radius PinpointInAppTemplate#border_radius}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.buttonAction">buttonAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.link">link</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.text">text</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text PinpointInAppTemplate#text}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.textColor">textColor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}. |

---

##### `backgroundColor`<sup>Optional</sup> <a name="backgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.backgroundColor"></a>

```java
public java.lang.String getBackgroundColor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}.

---

##### `borderRadius`<sup>Optional</sup> <a name="borderRadius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.borderRadius"></a>

```java
public java.lang.Number getBorderRadius();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#border_radius PinpointInAppTemplate#border_radius}.

---

##### `buttonAction`<sup>Optional</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.buttonAction"></a>

```java
public java.lang.String getButtonAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.link"></a>

```java
public java.lang.String getLink();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text PinpointInAppTemplate#text}.

---

##### `textColor`<sup>Optional</sup> <a name="textColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.textColor"></a>

```java
public java.lang.String getTextColor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}.

---

### PinpointInAppTemplateContentPrimaryBtnIos <a name="PinpointInAppTemplateContentPrimaryBtnIos" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateContentPrimaryBtnIos;

PinpointInAppTemplateContentPrimaryBtnIos.builder()
//  .buttonAction(java.lang.String)
//  .link(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos.property.buttonAction">buttonAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos.property.link">link</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `buttonAction`<sup>Optional</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos.property.buttonAction"></a>

```java
public java.lang.String getButtonAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos.property.link"></a>

```java
public java.lang.String getLink();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

### PinpointInAppTemplateContentPrimaryBtnWeb <a name="PinpointInAppTemplateContentPrimaryBtnWeb" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateContentPrimaryBtnWeb;

PinpointInAppTemplateContentPrimaryBtnWeb.builder()
//  .buttonAction(java.lang.String)
//  .link(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb.property.buttonAction">buttonAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb.property.link">link</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `buttonAction`<sup>Optional</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb.property.buttonAction"></a>

```java
public java.lang.String getButtonAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb.property.link"></a>

```java
public java.lang.String getLink();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

### PinpointInAppTemplateContentSecondaryBtn <a name="PinpointInAppTemplateContentSecondaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateContentSecondaryBtn;

PinpointInAppTemplateContentSecondaryBtn.builder()
//  .android(PinpointInAppTemplateContentSecondaryBtnAndroid)
//  .defaultConfig(PinpointInAppTemplateContentSecondaryBtnDefaultConfig)
//  .ios(PinpointInAppTemplateContentSecondaryBtnIos)
//  .web(PinpointInAppTemplateContentSecondaryBtnWeb)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.android">android</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#android PinpointInAppTemplate#android}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.defaultConfig">defaultConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#default_config PinpointInAppTemplate#default_config}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.ios">ios</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#ios PinpointInAppTemplate#ios}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.web">web</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#web PinpointInAppTemplate#web}. |

---

##### `android`<sup>Optional</sup> <a name="android" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.android"></a>

```java
public PinpointInAppTemplateContentSecondaryBtnAndroid getAndroid();
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#android PinpointInAppTemplate#android}.

---

##### `defaultConfig`<sup>Optional</sup> <a name="defaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.defaultConfig"></a>

```java
public PinpointInAppTemplateContentSecondaryBtnDefaultConfig getDefaultConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#default_config PinpointInAppTemplate#default_config}.

---

##### `ios`<sup>Optional</sup> <a name="ios" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.ios"></a>

```java
public PinpointInAppTemplateContentSecondaryBtnIos getIos();
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#ios PinpointInAppTemplate#ios}.

---

##### `web`<sup>Optional</sup> <a name="web" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.web"></a>

```java
public PinpointInAppTemplateContentSecondaryBtnWeb getWeb();
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#web PinpointInAppTemplate#web}.

---

### PinpointInAppTemplateContentSecondaryBtnAndroid <a name="PinpointInAppTemplateContentSecondaryBtnAndroid" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateContentSecondaryBtnAndroid;

PinpointInAppTemplateContentSecondaryBtnAndroid.builder()
//  .buttonAction(java.lang.String)
//  .link(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid.property.buttonAction">buttonAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid.property.link">link</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `buttonAction`<sup>Optional</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid.property.buttonAction"></a>

```java
public java.lang.String getButtonAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid.property.link"></a>

```java
public java.lang.String getLink();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

### PinpointInAppTemplateContentSecondaryBtnDefaultConfig <a name="PinpointInAppTemplateContentSecondaryBtnDefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateContentSecondaryBtnDefaultConfig;

PinpointInAppTemplateContentSecondaryBtnDefaultConfig.builder()
//  .backgroundColor(java.lang.String)
//  .borderRadius(java.lang.Number)
//  .buttonAction(java.lang.String)
//  .link(java.lang.String)
//  .text(java.lang.String)
//  .textColor(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.backgroundColor">backgroundColor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.borderRadius">borderRadius</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#border_radius PinpointInAppTemplate#border_radius}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.buttonAction">buttonAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.link">link</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.text">text</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text PinpointInAppTemplate#text}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.textColor">textColor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}. |

---

##### `backgroundColor`<sup>Optional</sup> <a name="backgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.backgroundColor"></a>

```java
public java.lang.String getBackgroundColor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}.

---

##### `borderRadius`<sup>Optional</sup> <a name="borderRadius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.borderRadius"></a>

```java
public java.lang.Number getBorderRadius();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#border_radius PinpointInAppTemplate#border_radius}.

---

##### `buttonAction`<sup>Optional</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.buttonAction"></a>

```java
public java.lang.String getButtonAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.link"></a>

```java
public java.lang.String getLink();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text PinpointInAppTemplate#text}.

---

##### `textColor`<sup>Optional</sup> <a name="textColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.textColor"></a>

```java
public java.lang.String getTextColor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}.

---

### PinpointInAppTemplateContentSecondaryBtnIos <a name="PinpointInAppTemplateContentSecondaryBtnIos" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateContentSecondaryBtnIos;

PinpointInAppTemplateContentSecondaryBtnIos.builder()
//  .buttonAction(java.lang.String)
//  .link(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos.property.buttonAction">buttonAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos.property.link">link</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `buttonAction`<sup>Optional</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos.property.buttonAction"></a>

```java
public java.lang.String getButtonAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos.property.link"></a>

```java
public java.lang.String getLink();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

### PinpointInAppTemplateContentSecondaryBtnWeb <a name="PinpointInAppTemplateContentSecondaryBtnWeb" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateContentSecondaryBtnWeb;

PinpointInAppTemplateContentSecondaryBtnWeb.builder()
//  .buttonAction(java.lang.String)
//  .link(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb.property.buttonAction">buttonAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb.property.link">link</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `buttonAction`<sup>Optional</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb.property.buttonAction"></a>

```java
public java.lang.String getButtonAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb.property.link"></a>

```java
public java.lang.String getLink();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

## Classes <a name="Classes" id="Classes"></a>

### PinpointInAppTemplateContentBodyConfigOutputReference <a name="PinpointInAppTemplateContentBodyConfigOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateContentBodyConfigOutputReference;

new PinpointInAppTemplateContentBodyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetAlignment">resetAlignment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetTextColor">resetTextColor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlignment` <a name="resetAlignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetAlignment"></a>

```java
public void resetAlignment()
```

##### `resetBody` <a name="resetBody" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetBody"></a>

```java
public void resetBody()
```

##### `resetTextColor` <a name="resetTextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetTextColor"></a>

```java
public void resetTextColor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.alignmentInput">alignmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.textColorInput">textColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.alignment">alignment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.textColor">textColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alignmentInput`<sup>Optional</sup> <a name="alignmentInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.alignmentInput"></a>

```java
public java.lang.String getAlignmentInput();
```

- *Type:* java.lang.String

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `textColorInput`<sup>Optional</sup> <a name="textColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.textColorInput"></a>

```java
public java.lang.String getTextColorInput();
```

- *Type:* java.lang.String

---

##### `alignment`<sup>Required</sup> <a name="alignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.alignment"></a>

```java
public java.lang.String getAlignment();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `textColor`<sup>Required</sup> <a name="textColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.textColor"></a>

```java
public java.lang.String getTextColor();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|PinpointInAppTemplateContentBodyConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a>

---


### PinpointInAppTemplateContentHeaderConfigOutputReference <a name="PinpointInAppTemplateContentHeaderConfigOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateContentHeaderConfigOutputReference;

new PinpointInAppTemplateContentHeaderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetAlignment">resetAlignment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetTextColor">resetTextColor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlignment` <a name="resetAlignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetAlignment"></a>

```java
public void resetAlignment()
```

##### `resetHeader` <a name="resetHeader" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetHeader"></a>

```java
public void resetHeader()
```

##### `resetTextColor` <a name="resetTextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetTextColor"></a>

```java
public void resetTextColor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.alignmentInput">alignmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.headerInput">headerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.textColorInput">textColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.alignment">alignment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.header">header</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.textColor">textColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alignmentInput`<sup>Optional</sup> <a name="alignmentInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.alignmentInput"></a>

```java
public java.lang.String getAlignmentInput();
```

- *Type:* java.lang.String

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.headerInput"></a>

```java
public java.lang.String getHeaderInput();
```

- *Type:* java.lang.String

---

##### `textColorInput`<sup>Optional</sup> <a name="textColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.textColorInput"></a>

```java
public java.lang.String getTextColorInput();
```

- *Type:* java.lang.String

---

##### `alignment`<sup>Required</sup> <a name="alignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.alignment"></a>

```java
public java.lang.String getAlignment();
```

- *Type:* java.lang.String

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.header"></a>

```java
public java.lang.String getHeader();
```

- *Type:* java.lang.String

---

##### `textColor`<sup>Required</sup> <a name="textColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.textColor"></a>

```java
public java.lang.String getTextColor();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|PinpointInAppTemplateContentHeaderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a>

---


### PinpointInAppTemplateContentList <a name="PinpointInAppTemplateContentList" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateContentList;

new PinpointInAppTemplateContentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.get"></a>

```java
public PinpointInAppTemplateContentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PinpointInAppTemplateContent> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>>

---


### PinpointInAppTemplateContentOutputReference <a name="PinpointInAppTemplateContentOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateContentOutputReference;

new PinpointInAppTemplateContentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putBodyConfig">putBodyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putHeaderConfig">putHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putPrimaryBtn">putPrimaryBtn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putSecondaryBtn">putSecondaryBtn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetBackgroundColor">resetBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetBodyConfig">resetBodyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetHeaderConfig">resetHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetImageUrl">resetImageUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetPrimaryBtn">resetPrimaryBtn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetSecondaryBtn">resetSecondaryBtn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBodyConfig` <a name="putBodyConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putBodyConfig"></a>

```java
public void putBodyConfig(PinpointInAppTemplateContentBodyConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putBodyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a>

---

##### `putHeaderConfig` <a name="putHeaderConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putHeaderConfig"></a>

```java
public void putHeaderConfig(PinpointInAppTemplateContentHeaderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putHeaderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a>

---

##### `putPrimaryBtn` <a name="putPrimaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putPrimaryBtn"></a>

```java
public void putPrimaryBtn(PinpointInAppTemplateContentPrimaryBtn value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putPrimaryBtn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a>

---

##### `putSecondaryBtn` <a name="putSecondaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putSecondaryBtn"></a>

```java
public void putSecondaryBtn(PinpointInAppTemplateContentSecondaryBtn value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putSecondaryBtn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a>

---

##### `resetBackgroundColor` <a name="resetBackgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetBackgroundColor"></a>

```java
public void resetBackgroundColor()
```

##### `resetBodyConfig` <a name="resetBodyConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetBodyConfig"></a>

```java
public void resetBodyConfig()
```

##### `resetHeaderConfig` <a name="resetHeaderConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetHeaderConfig"></a>

```java
public void resetHeaderConfig()
```

##### `resetImageUrl` <a name="resetImageUrl" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetImageUrl"></a>

```java
public void resetImageUrl()
```

##### `resetPrimaryBtn` <a name="resetPrimaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetPrimaryBtn"></a>

```java
public void resetPrimaryBtn()
```

##### `resetSecondaryBtn` <a name="resetSecondaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetSecondaryBtn"></a>

```java
public void resetSecondaryBtn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.bodyConfig">bodyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference">PinpointInAppTemplateContentBodyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.headerConfig">headerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference">PinpointInAppTemplateContentHeaderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.primaryBtn">primaryBtn</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference">PinpointInAppTemplateContentPrimaryBtnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.secondaryBtn">secondaryBtn</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference">PinpointInAppTemplateContentSecondaryBtnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.backgroundColorInput">backgroundColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.bodyConfigInput">bodyConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.headerConfigInput">headerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.imageUrlInput">imageUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.primaryBtnInput">primaryBtnInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.secondaryBtnInput">secondaryBtnInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.backgroundColor">backgroundColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.imageUrl">imageUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bodyConfig`<sup>Required</sup> <a name="bodyConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.bodyConfig"></a>

```java
public PinpointInAppTemplateContentBodyConfigOutputReference getBodyConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference">PinpointInAppTemplateContentBodyConfigOutputReference</a>

---

##### `headerConfig`<sup>Required</sup> <a name="headerConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.headerConfig"></a>

```java
public PinpointInAppTemplateContentHeaderConfigOutputReference getHeaderConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference">PinpointInAppTemplateContentHeaderConfigOutputReference</a>

---

##### `primaryBtn`<sup>Required</sup> <a name="primaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.primaryBtn"></a>

```java
public PinpointInAppTemplateContentPrimaryBtnOutputReference getPrimaryBtn();
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference">PinpointInAppTemplateContentPrimaryBtnOutputReference</a>

---

##### `secondaryBtn`<sup>Required</sup> <a name="secondaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.secondaryBtn"></a>

```java
public PinpointInAppTemplateContentSecondaryBtnOutputReference getSecondaryBtn();
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference">PinpointInAppTemplateContentSecondaryBtnOutputReference</a>

---

##### `backgroundColorInput`<sup>Optional</sup> <a name="backgroundColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.backgroundColorInput"></a>

```java
public java.lang.String getBackgroundColorInput();
```

- *Type:* java.lang.String

---

##### `bodyConfigInput`<sup>Optional</sup> <a name="bodyConfigInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.bodyConfigInput"></a>

```java
public IResolvable|PinpointInAppTemplateContentBodyConfig getBodyConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a>

---

##### `headerConfigInput`<sup>Optional</sup> <a name="headerConfigInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.headerConfigInput"></a>

```java
public IResolvable|PinpointInAppTemplateContentHeaderConfig getHeaderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a>

---

##### `imageUrlInput`<sup>Optional</sup> <a name="imageUrlInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.imageUrlInput"></a>

```java
public java.lang.String getImageUrlInput();
```

- *Type:* java.lang.String

---

##### `primaryBtnInput`<sup>Optional</sup> <a name="primaryBtnInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.primaryBtnInput"></a>

```java
public IResolvable|PinpointInAppTemplateContentPrimaryBtn getPrimaryBtnInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a>

---

##### `secondaryBtnInput`<sup>Optional</sup> <a name="secondaryBtnInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.secondaryBtnInput"></a>

```java
public IResolvable|PinpointInAppTemplateContentSecondaryBtn getSecondaryBtnInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a>

---

##### `backgroundColor`<sup>Required</sup> <a name="backgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.backgroundColor"></a>

```java
public java.lang.String getBackgroundColor();
```

- *Type:* java.lang.String

---

##### `imageUrl`<sup>Required</sup> <a name="imageUrl" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.imageUrl"></a>

```java
public java.lang.String getImageUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.internalValue"></a>

```java
public IResolvable|PinpointInAppTemplateContent getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>

---


### PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference <a name="PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference;

new PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resetButtonAction">resetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resetLink">resetLink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetButtonAction` <a name="resetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resetButtonAction"></a>

```java
public void resetButtonAction()
```

##### `resetLink` <a name="resetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resetLink"></a>

```java
public void resetLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonActionInput">buttonActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.linkInput">linkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonAction">buttonAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.link">link</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buttonActionInput`<sup>Optional</sup> <a name="buttonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonActionInput"></a>

```java
public java.lang.String getButtonActionInput();
```

- *Type:* java.lang.String

---

##### `linkInput`<sup>Optional</sup> <a name="linkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.linkInput"></a>

```java
public java.lang.String getLinkInput();
```

- *Type:* java.lang.String

---

##### `buttonAction`<sup>Required</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonAction"></a>

```java
public java.lang.String getButtonAction();
```

- *Type:* java.lang.String

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.link"></a>

```java
public java.lang.String getLink();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.internalValue"></a>

```java
public IResolvable|PinpointInAppTemplateContentPrimaryBtnAndroid getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a>

---


### PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference <a name="PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference;

new PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetBackgroundColor">resetBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetBorderRadius">resetBorderRadius</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetButtonAction">resetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetLink">resetLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetTextColor">resetTextColor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackgroundColor` <a name="resetBackgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetBackgroundColor"></a>

```java
public void resetBackgroundColor()
```

##### `resetBorderRadius` <a name="resetBorderRadius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetBorderRadius"></a>

```java
public void resetBorderRadius()
```

##### `resetButtonAction` <a name="resetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetButtonAction"></a>

```java
public void resetButtonAction()
```

##### `resetLink` <a name="resetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetLink"></a>

```java
public void resetLink()
```

##### `resetText` <a name="resetText" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetText"></a>

```java
public void resetText()
```

##### `resetTextColor` <a name="resetTextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetTextColor"></a>

```java
public void resetTextColor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColorInput">backgroundColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadiusInput">borderRadiusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonActionInput">buttonActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.linkInput">linkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColorInput">textColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColor">backgroundColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadius">borderRadius</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonAction">buttonAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.link">link</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColor">textColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backgroundColorInput`<sup>Optional</sup> <a name="backgroundColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColorInput"></a>

```java
public java.lang.String getBackgroundColorInput();
```

- *Type:* java.lang.String

---

##### `borderRadiusInput`<sup>Optional</sup> <a name="borderRadiusInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadiusInput"></a>

```java
public java.lang.Number getBorderRadiusInput();
```

- *Type:* java.lang.Number

---

##### `buttonActionInput`<sup>Optional</sup> <a name="buttonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonActionInput"></a>

```java
public java.lang.String getButtonActionInput();
```

- *Type:* java.lang.String

---

##### `linkInput`<sup>Optional</sup> <a name="linkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.linkInput"></a>

```java
public java.lang.String getLinkInput();
```

- *Type:* java.lang.String

---

##### `textColorInput`<sup>Optional</sup> <a name="textColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColorInput"></a>

```java
public java.lang.String getTextColorInput();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `backgroundColor`<sup>Required</sup> <a name="backgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColor"></a>

```java
public java.lang.String getBackgroundColor();
```

- *Type:* java.lang.String

---

##### `borderRadius`<sup>Required</sup> <a name="borderRadius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadius"></a>

```java
public java.lang.Number getBorderRadius();
```

- *Type:* java.lang.Number

---

##### `buttonAction`<sup>Required</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonAction"></a>

```java
public java.lang.String getButtonAction();
```

- *Type:* java.lang.String

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.link"></a>

```java
public java.lang.String getLink();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `textColor`<sup>Required</sup> <a name="textColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColor"></a>

```java
public java.lang.String getTextColor();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|PinpointInAppTemplateContentPrimaryBtnDefaultConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a>

---


### PinpointInAppTemplateContentPrimaryBtnIosOutputReference <a name="PinpointInAppTemplateContentPrimaryBtnIosOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateContentPrimaryBtnIosOutputReference;

new PinpointInAppTemplateContentPrimaryBtnIosOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resetButtonAction">resetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resetLink">resetLink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetButtonAction` <a name="resetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resetButtonAction"></a>

```java
public void resetButtonAction()
```

##### `resetLink` <a name="resetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resetLink"></a>

```java
public void resetLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonActionInput">buttonActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.linkInput">linkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonAction">buttonAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.link">link</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buttonActionInput`<sup>Optional</sup> <a name="buttonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonActionInput"></a>

```java
public java.lang.String getButtonActionInput();
```

- *Type:* java.lang.String

---

##### `linkInput`<sup>Optional</sup> <a name="linkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.linkInput"></a>

```java
public java.lang.String getLinkInput();
```

- *Type:* java.lang.String

---

##### `buttonAction`<sup>Required</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonAction"></a>

```java
public java.lang.String getButtonAction();
```

- *Type:* java.lang.String

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.link"></a>

```java
public java.lang.String getLink();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.internalValue"></a>

```java
public IResolvable|PinpointInAppTemplateContentPrimaryBtnIos getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a>

---


### PinpointInAppTemplateContentPrimaryBtnOutputReference <a name="PinpointInAppTemplateContentPrimaryBtnOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateContentPrimaryBtnOutputReference;

new PinpointInAppTemplateContentPrimaryBtnOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putAndroid">putAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putDefaultConfig">putDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putIos">putIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putWeb">putWeb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetAndroid">resetAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetDefaultConfig">resetDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetIos">resetIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetWeb">resetWeb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAndroid` <a name="putAndroid" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putAndroid"></a>

```java
public void putAndroid(PinpointInAppTemplateContentPrimaryBtnAndroid value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putAndroid.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a>

---

##### `putDefaultConfig` <a name="putDefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putDefaultConfig"></a>

```java
public void putDefaultConfig(PinpointInAppTemplateContentPrimaryBtnDefaultConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putDefaultConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a>

---

##### `putIos` <a name="putIos" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putIos"></a>

```java
public void putIos(PinpointInAppTemplateContentPrimaryBtnIos value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putIos.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a>

---

##### `putWeb` <a name="putWeb" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putWeb"></a>

```java
public void putWeb(PinpointInAppTemplateContentPrimaryBtnWeb value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putWeb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a>

---

##### `resetAndroid` <a name="resetAndroid" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetAndroid"></a>

```java
public void resetAndroid()
```

##### `resetDefaultConfig` <a name="resetDefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetDefaultConfig"></a>

```java
public void resetDefaultConfig()
```

##### `resetIos` <a name="resetIos" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetIos"></a>

```java
public void resetIos()
```

##### `resetWeb` <a name="resetWeb" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetWeb"></a>

```java
public void resetWeb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.android">android</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference">PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfig">defaultConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference">PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.ios">ios</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference">PinpointInAppTemplateContentPrimaryBtnIosOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.web">web</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference">PinpointInAppTemplateContentPrimaryBtnWebOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.androidInput">androidInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfigInput">defaultConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.iosInput">iosInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.webInput">webInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `android`<sup>Required</sup> <a name="android" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.android"></a>

```java
public PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference getAndroid();
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference">PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference</a>

---

##### `defaultConfig`<sup>Required</sup> <a name="defaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfig"></a>

```java
public PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference getDefaultConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference">PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference</a>

---

##### `ios`<sup>Required</sup> <a name="ios" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.ios"></a>

```java
public PinpointInAppTemplateContentPrimaryBtnIosOutputReference getIos();
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference">PinpointInAppTemplateContentPrimaryBtnIosOutputReference</a>

---

##### `web`<sup>Required</sup> <a name="web" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.web"></a>

```java
public PinpointInAppTemplateContentPrimaryBtnWebOutputReference getWeb();
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference">PinpointInAppTemplateContentPrimaryBtnWebOutputReference</a>

---

##### `androidInput`<sup>Optional</sup> <a name="androidInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.androidInput"></a>

```java
public IResolvable|PinpointInAppTemplateContentPrimaryBtnAndroid getAndroidInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a>

---

##### `defaultConfigInput`<sup>Optional</sup> <a name="defaultConfigInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfigInput"></a>

```java
public IResolvable|PinpointInAppTemplateContentPrimaryBtnDefaultConfig getDefaultConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a>

---

##### `iosInput`<sup>Optional</sup> <a name="iosInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.iosInput"></a>

```java
public IResolvable|PinpointInAppTemplateContentPrimaryBtnIos getIosInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a>

---

##### `webInput`<sup>Optional</sup> <a name="webInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.webInput"></a>

```java
public IResolvable|PinpointInAppTemplateContentPrimaryBtnWeb getWebInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.internalValue"></a>

```java
public IResolvable|PinpointInAppTemplateContentPrimaryBtn getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a>

---


### PinpointInAppTemplateContentPrimaryBtnWebOutputReference <a name="PinpointInAppTemplateContentPrimaryBtnWebOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateContentPrimaryBtnWebOutputReference;

new PinpointInAppTemplateContentPrimaryBtnWebOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resetButtonAction">resetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resetLink">resetLink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetButtonAction` <a name="resetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resetButtonAction"></a>

```java
public void resetButtonAction()
```

##### `resetLink` <a name="resetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resetLink"></a>

```java
public void resetLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonActionInput">buttonActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.linkInput">linkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonAction">buttonAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.link">link</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buttonActionInput`<sup>Optional</sup> <a name="buttonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonActionInput"></a>

```java
public java.lang.String getButtonActionInput();
```

- *Type:* java.lang.String

---

##### `linkInput`<sup>Optional</sup> <a name="linkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.linkInput"></a>

```java
public java.lang.String getLinkInput();
```

- *Type:* java.lang.String

---

##### `buttonAction`<sup>Required</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonAction"></a>

```java
public java.lang.String getButtonAction();
```

- *Type:* java.lang.String

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.link"></a>

```java
public java.lang.String getLink();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.internalValue"></a>

```java
public IResolvable|PinpointInAppTemplateContentPrimaryBtnWeb getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a>

---


### PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference <a name="PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference;

new PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resetButtonAction">resetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resetLink">resetLink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetButtonAction` <a name="resetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resetButtonAction"></a>

```java
public void resetButtonAction()
```

##### `resetLink` <a name="resetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resetLink"></a>

```java
public void resetLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonActionInput">buttonActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.linkInput">linkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonAction">buttonAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.link">link</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buttonActionInput`<sup>Optional</sup> <a name="buttonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonActionInput"></a>

```java
public java.lang.String getButtonActionInput();
```

- *Type:* java.lang.String

---

##### `linkInput`<sup>Optional</sup> <a name="linkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.linkInput"></a>

```java
public java.lang.String getLinkInput();
```

- *Type:* java.lang.String

---

##### `buttonAction`<sup>Required</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonAction"></a>

```java
public java.lang.String getButtonAction();
```

- *Type:* java.lang.String

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.link"></a>

```java
public java.lang.String getLink();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.internalValue"></a>

```java
public IResolvable|PinpointInAppTemplateContentSecondaryBtnAndroid getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a>

---


### PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference <a name="PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference;

new PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetBackgroundColor">resetBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetBorderRadius">resetBorderRadius</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetButtonAction">resetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetLink">resetLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetTextColor">resetTextColor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackgroundColor` <a name="resetBackgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetBackgroundColor"></a>

```java
public void resetBackgroundColor()
```

##### `resetBorderRadius` <a name="resetBorderRadius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetBorderRadius"></a>

```java
public void resetBorderRadius()
```

##### `resetButtonAction` <a name="resetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetButtonAction"></a>

```java
public void resetButtonAction()
```

##### `resetLink` <a name="resetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetLink"></a>

```java
public void resetLink()
```

##### `resetText` <a name="resetText" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetText"></a>

```java
public void resetText()
```

##### `resetTextColor` <a name="resetTextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetTextColor"></a>

```java
public void resetTextColor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColorInput">backgroundColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadiusInput">borderRadiusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonActionInput">buttonActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.linkInput">linkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColorInput">textColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColor">backgroundColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadius">borderRadius</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonAction">buttonAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.link">link</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColor">textColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backgroundColorInput`<sup>Optional</sup> <a name="backgroundColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColorInput"></a>

```java
public java.lang.String getBackgroundColorInput();
```

- *Type:* java.lang.String

---

##### `borderRadiusInput`<sup>Optional</sup> <a name="borderRadiusInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadiusInput"></a>

```java
public java.lang.Number getBorderRadiusInput();
```

- *Type:* java.lang.Number

---

##### `buttonActionInput`<sup>Optional</sup> <a name="buttonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonActionInput"></a>

```java
public java.lang.String getButtonActionInput();
```

- *Type:* java.lang.String

---

##### `linkInput`<sup>Optional</sup> <a name="linkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.linkInput"></a>

```java
public java.lang.String getLinkInput();
```

- *Type:* java.lang.String

---

##### `textColorInput`<sup>Optional</sup> <a name="textColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColorInput"></a>

```java
public java.lang.String getTextColorInput();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `backgroundColor`<sup>Required</sup> <a name="backgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColor"></a>

```java
public java.lang.String getBackgroundColor();
```

- *Type:* java.lang.String

---

##### `borderRadius`<sup>Required</sup> <a name="borderRadius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadius"></a>

```java
public java.lang.Number getBorderRadius();
```

- *Type:* java.lang.Number

---

##### `buttonAction`<sup>Required</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonAction"></a>

```java
public java.lang.String getButtonAction();
```

- *Type:* java.lang.String

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.link"></a>

```java
public java.lang.String getLink();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `textColor`<sup>Required</sup> <a name="textColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColor"></a>

```java
public java.lang.String getTextColor();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|PinpointInAppTemplateContentSecondaryBtnDefaultConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a>

---


### PinpointInAppTemplateContentSecondaryBtnIosOutputReference <a name="PinpointInAppTemplateContentSecondaryBtnIosOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateContentSecondaryBtnIosOutputReference;

new PinpointInAppTemplateContentSecondaryBtnIosOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resetButtonAction">resetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resetLink">resetLink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetButtonAction` <a name="resetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resetButtonAction"></a>

```java
public void resetButtonAction()
```

##### `resetLink` <a name="resetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resetLink"></a>

```java
public void resetLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonActionInput">buttonActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.linkInput">linkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonAction">buttonAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.link">link</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buttonActionInput`<sup>Optional</sup> <a name="buttonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonActionInput"></a>

```java
public java.lang.String getButtonActionInput();
```

- *Type:* java.lang.String

---

##### `linkInput`<sup>Optional</sup> <a name="linkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.linkInput"></a>

```java
public java.lang.String getLinkInput();
```

- *Type:* java.lang.String

---

##### `buttonAction`<sup>Required</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonAction"></a>

```java
public java.lang.String getButtonAction();
```

- *Type:* java.lang.String

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.link"></a>

```java
public java.lang.String getLink();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.internalValue"></a>

```java
public IResolvable|PinpointInAppTemplateContentSecondaryBtnIos getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a>

---


### PinpointInAppTemplateContentSecondaryBtnOutputReference <a name="PinpointInAppTemplateContentSecondaryBtnOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateContentSecondaryBtnOutputReference;

new PinpointInAppTemplateContentSecondaryBtnOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putAndroid">putAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putDefaultConfig">putDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putIos">putIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putWeb">putWeb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetAndroid">resetAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetDefaultConfig">resetDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetIos">resetIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetWeb">resetWeb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAndroid` <a name="putAndroid" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putAndroid"></a>

```java
public void putAndroid(PinpointInAppTemplateContentSecondaryBtnAndroid value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putAndroid.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a>

---

##### `putDefaultConfig` <a name="putDefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putDefaultConfig"></a>

```java
public void putDefaultConfig(PinpointInAppTemplateContentSecondaryBtnDefaultConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putDefaultConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a>

---

##### `putIos` <a name="putIos" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putIos"></a>

```java
public void putIos(PinpointInAppTemplateContentSecondaryBtnIos value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putIos.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a>

---

##### `putWeb` <a name="putWeb" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putWeb"></a>

```java
public void putWeb(PinpointInAppTemplateContentSecondaryBtnWeb value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putWeb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a>

---

##### `resetAndroid` <a name="resetAndroid" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetAndroid"></a>

```java
public void resetAndroid()
```

##### `resetDefaultConfig` <a name="resetDefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetDefaultConfig"></a>

```java
public void resetDefaultConfig()
```

##### `resetIos` <a name="resetIos" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetIos"></a>

```java
public void resetIos()
```

##### `resetWeb` <a name="resetWeb" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetWeb"></a>

```java
public void resetWeb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.android">android</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference">PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfig">defaultConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference">PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.ios">ios</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference">PinpointInAppTemplateContentSecondaryBtnIosOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.web">web</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference">PinpointInAppTemplateContentSecondaryBtnWebOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.androidInput">androidInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfigInput">defaultConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.iosInput">iosInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.webInput">webInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `android`<sup>Required</sup> <a name="android" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.android"></a>

```java
public PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference getAndroid();
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference">PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference</a>

---

##### `defaultConfig`<sup>Required</sup> <a name="defaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfig"></a>

```java
public PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference getDefaultConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference">PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference</a>

---

##### `ios`<sup>Required</sup> <a name="ios" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.ios"></a>

```java
public PinpointInAppTemplateContentSecondaryBtnIosOutputReference getIos();
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference">PinpointInAppTemplateContentSecondaryBtnIosOutputReference</a>

---

##### `web`<sup>Required</sup> <a name="web" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.web"></a>

```java
public PinpointInAppTemplateContentSecondaryBtnWebOutputReference getWeb();
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference">PinpointInAppTemplateContentSecondaryBtnWebOutputReference</a>

---

##### `androidInput`<sup>Optional</sup> <a name="androidInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.androidInput"></a>

```java
public IResolvable|PinpointInAppTemplateContentSecondaryBtnAndroid getAndroidInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a>

---

##### `defaultConfigInput`<sup>Optional</sup> <a name="defaultConfigInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfigInput"></a>

```java
public IResolvable|PinpointInAppTemplateContentSecondaryBtnDefaultConfig getDefaultConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a>

---

##### `iosInput`<sup>Optional</sup> <a name="iosInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.iosInput"></a>

```java
public IResolvable|PinpointInAppTemplateContentSecondaryBtnIos getIosInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a>

---

##### `webInput`<sup>Optional</sup> <a name="webInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.webInput"></a>

```java
public IResolvable|PinpointInAppTemplateContentSecondaryBtnWeb getWebInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.internalValue"></a>

```java
public IResolvable|PinpointInAppTemplateContentSecondaryBtn getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a>

---


### PinpointInAppTemplateContentSecondaryBtnWebOutputReference <a name="PinpointInAppTemplateContentSecondaryBtnWebOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.pinpoint_in_app_template.PinpointInAppTemplateContentSecondaryBtnWebOutputReference;

new PinpointInAppTemplateContentSecondaryBtnWebOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resetButtonAction">resetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resetLink">resetLink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetButtonAction` <a name="resetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resetButtonAction"></a>

```java
public void resetButtonAction()
```

##### `resetLink` <a name="resetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resetLink"></a>

```java
public void resetLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonActionInput">buttonActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.linkInput">linkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonAction">buttonAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.link">link</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buttonActionInput`<sup>Optional</sup> <a name="buttonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonActionInput"></a>

```java
public java.lang.String getButtonActionInput();
```

- *Type:* java.lang.String

---

##### `linkInput`<sup>Optional</sup> <a name="linkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.linkInput"></a>

```java
public java.lang.String getLinkInput();
```

- *Type:* java.lang.String

---

##### `buttonAction`<sup>Required</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonAction"></a>

```java
public java.lang.String getButtonAction();
```

- *Type:* java.lang.String

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.link"></a>

```java
public java.lang.String getLink();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.internalValue"></a>

```java
public IResolvable|PinpointInAppTemplateContentSecondaryBtnWeb getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a>

---



