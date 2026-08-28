# `iotProvisioningTemplate` Submodule <a name="`iotProvisioningTemplate` Submodule" id="@cdktn/provider-awscc.iotProvisioningTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotProvisioningTemplate <a name="IotProvisioningTemplate" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template awscc_iot_provisioning_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_provisioning_template.IotProvisioningTemplate;

IotProvisioningTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .provisioningRoleArn(java.lang.String)
    .templateBody(java.lang.String)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .preProvisioningHook(IotProvisioningTemplatePreProvisioningHook)
//  .tags(IResolvable|java.util.List<IotProvisioningTemplateTags>)
//  .templateName(java.lang.String)
//  .templateType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.provisioningRoleArn">provisioningRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#provisioning_role_arn IotProvisioningTemplate#provisioning_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.templateBody">templateBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#template_body IotProvisioningTemplate#template_body}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#description IotProvisioningTemplate#description}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#enabled IotProvisioningTemplate#enabled}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.preProvisioningHook">preProvisioningHook</a></code> | <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#pre_provisioning_hook IotProvisioningTemplate#pre_provisioning_hook}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags">IotProvisioningTemplateTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#tags IotProvisioningTemplate#tags}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.templateName">templateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#template_name IotProvisioningTemplate#template_name}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.templateType">templateType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#template_type IotProvisioningTemplate#template_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `provisioningRoleArn`<sup>Required</sup> <a name="provisioningRoleArn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.provisioningRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#provisioning_role_arn IotProvisioningTemplate#provisioning_role_arn}.

---

##### `templateBody`<sup>Required</sup> <a name="templateBody" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.templateBody"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#template_body IotProvisioningTemplate#template_body}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#description IotProvisioningTemplate#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#enabled IotProvisioningTemplate#enabled}.

---

##### `preProvisioningHook`<sup>Optional</sup> <a name="preProvisioningHook" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.preProvisioningHook"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#pre_provisioning_hook IotProvisioningTemplate#pre_provisioning_hook}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags">IotProvisioningTemplateTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#tags IotProvisioningTemplate#tags}.

---

##### `templateName`<sup>Optional</sup> <a name="templateName" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.templateName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#template_name IotProvisioningTemplate#template_name}.

---

##### `templateType`<sup>Optional</sup> <a name="templateType" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.templateType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#template_type IotProvisioningTemplate#template_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.putPreProvisioningHook">putPreProvisioningHook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetPreProvisioningHook">resetPreProvisioningHook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetTemplateName">resetTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetTemplateType">resetTemplateType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPreProvisioningHook` <a name="putPreProvisioningHook" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.putPreProvisioningHook"></a>

```java
public void putPreProvisioningHook(IotProvisioningTemplatePreProvisioningHook value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.putPreProvisioningHook.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IotProvisioningTemplateTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags">IotProvisioningTemplateTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetPreProvisioningHook` <a name="resetPreProvisioningHook" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetPreProvisioningHook"></a>

```java
public void resetPreProvisioningHook()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetTags"></a>

```java
public void resetTags()
```

##### `resetTemplateName` <a name="resetTemplateName" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetTemplateName"></a>

```java
public void resetTemplateName()
```

##### `resetTemplateType` <a name="resetTemplateType" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetTemplateType"></a>

```java
public void resetTemplateType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotProvisioningTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iot_provisioning_template.IotProvisioningTemplate;

IotProvisioningTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iot_provisioning_template.IotProvisioningTemplate;

IotProvisioningTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iot_provisioning_template.IotProvisioningTemplate;

IotProvisioningTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iot_provisioning_template.IotProvisioningTemplate;

IotProvisioningTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotProvisioningTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotProvisioningTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotProvisioningTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotProvisioningTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotProvisioningTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.preProvisioningHook">preProvisioningHook</a></code> | <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference">IotProvisioningTemplatePreProvisioningHookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList">IotProvisioningTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateArn">templateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.preProvisioningHookInput">preProvisioningHookInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioningRoleArnInput">provisioningRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags">IotProvisioningTemplateTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateBodyInput">templateBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateNameInput">templateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateTypeInput">templateTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioningRoleArn">provisioningRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateBody">templateBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateName">templateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateType">templateType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `preProvisioningHook`<sup>Required</sup> <a name="preProvisioningHook" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.preProvisioningHook"></a>

```java
public IotProvisioningTemplatePreProvisioningHookOutputReference getPreProvisioningHook();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference">IotProvisioningTemplatePreProvisioningHookOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.tags"></a>

```java
public IotProvisioningTemplateTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList">IotProvisioningTemplateTagsList</a>

---

##### `templateArn`<sup>Required</sup> <a name="templateArn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateArn"></a>

```java
public java.lang.String getTemplateArn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `preProvisioningHookInput`<sup>Optional</sup> <a name="preProvisioningHookInput" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.preProvisioningHookInput"></a>

```java
public IResolvable|IotProvisioningTemplatePreProvisioningHook getPreProvisioningHookInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a>

---

##### `provisioningRoleArnInput`<sup>Optional</sup> <a name="provisioningRoleArnInput" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioningRoleArnInput"></a>

```java
public java.lang.String getProvisioningRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IotProvisioningTemplateTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags">IotProvisioningTemplateTags</a>>

---

##### `templateBodyInput`<sup>Optional</sup> <a name="templateBodyInput" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateBodyInput"></a>

```java
public java.lang.String getTemplateBodyInput();
```

- *Type:* java.lang.String

---

##### `templateNameInput`<sup>Optional</sup> <a name="templateNameInput" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateNameInput"></a>

```java
public java.lang.String getTemplateNameInput();
```

- *Type:* java.lang.String

---

##### `templateTypeInput`<sup>Optional</sup> <a name="templateTypeInput" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateTypeInput"></a>

```java
public java.lang.String getTemplateTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `provisioningRoleArn`<sup>Required</sup> <a name="provisioningRoleArn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioningRoleArn"></a>

```java
public java.lang.String getProvisioningRoleArn();
```

- *Type:* java.lang.String

---

##### `templateBody`<sup>Required</sup> <a name="templateBody" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateBody"></a>

```java
public java.lang.String getTemplateBody();
```

- *Type:* java.lang.String

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateName"></a>

```java
public java.lang.String getTemplateName();
```

- *Type:* java.lang.String

---

##### `templateType`<sup>Required</sup> <a name="templateType" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateType"></a>

```java
public java.lang.String getTemplateType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotProvisioningTemplateConfig <a name="IotProvisioningTemplateConfig" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_provisioning_template.IotProvisioningTemplateConfig;

IotProvisioningTemplateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .provisioningRoleArn(java.lang.String)
    .templateBody(java.lang.String)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .preProvisioningHook(IotProvisioningTemplatePreProvisioningHook)
//  .tags(IResolvable|java.util.List<IotProvisioningTemplateTags>)
//  .templateName(java.lang.String)
//  .templateType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provisioningRoleArn">provisioningRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#provisioning_role_arn IotProvisioningTemplate#provisioning_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.templateBody">templateBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#template_body IotProvisioningTemplate#template_body}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#description IotProvisioningTemplate#description}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#enabled IotProvisioningTemplate#enabled}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.preProvisioningHook">preProvisioningHook</a></code> | <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#pre_provisioning_hook IotProvisioningTemplate#pre_provisioning_hook}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags">IotProvisioningTemplateTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#tags IotProvisioningTemplate#tags}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.templateName">templateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#template_name IotProvisioningTemplate#template_name}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.templateType">templateType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#template_type IotProvisioningTemplate#template_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `provisioningRoleArn`<sup>Required</sup> <a name="provisioningRoleArn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provisioningRoleArn"></a>

```java
public java.lang.String getProvisioningRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#provisioning_role_arn IotProvisioningTemplate#provisioning_role_arn}.

---

##### `templateBody`<sup>Required</sup> <a name="templateBody" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.templateBody"></a>

```java
public java.lang.String getTemplateBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#template_body IotProvisioningTemplate#template_body}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#description IotProvisioningTemplate#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#enabled IotProvisioningTemplate#enabled}.

---

##### `preProvisioningHook`<sup>Optional</sup> <a name="preProvisioningHook" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.preProvisioningHook"></a>

```java
public IotProvisioningTemplatePreProvisioningHook getPreProvisioningHook();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#pre_provisioning_hook IotProvisioningTemplate#pre_provisioning_hook}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IotProvisioningTemplateTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags">IotProvisioningTemplateTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#tags IotProvisioningTemplate#tags}.

---

##### `templateName`<sup>Optional</sup> <a name="templateName" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.templateName"></a>

```java
public java.lang.String getTemplateName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#template_name IotProvisioningTemplate#template_name}.

---

##### `templateType`<sup>Optional</sup> <a name="templateType" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.templateType"></a>

```java
public java.lang.String getTemplateType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#template_type IotProvisioningTemplate#template_type}.

---

### IotProvisioningTemplatePreProvisioningHook <a name="IotProvisioningTemplatePreProvisioningHook" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_provisioning_template.IotProvisioningTemplatePreProvisioningHook;

IotProvisioningTemplatePreProvisioningHook.builder()
//  .payloadVersion(java.lang.String)
//  .targetArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook.property.payloadVersion">payloadVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#payload_version IotProvisioningTemplate#payload_version}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook.property.targetArn">targetArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#target_arn IotProvisioningTemplate#target_arn}. |

---

##### `payloadVersion`<sup>Optional</sup> <a name="payloadVersion" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook.property.payloadVersion"></a>

```java
public java.lang.String getPayloadVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#payload_version IotProvisioningTemplate#payload_version}.

---

##### `targetArn`<sup>Optional</sup> <a name="targetArn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook.property.targetArn"></a>

```java
public java.lang.String getTargetArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#target_arn IotProvisioningTemplate#target_arn}.

---

### IotProvisioningTemplateTags <a name="IotProvisioningTemplateTags" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_provisioning_template.IotProvisioningTemplateTags;

IotProvisioningTemplateTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#key IotProvisioningTemplate#key}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#value IotProvisioningTemplate#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#key IotProvisioningTemplate#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#value IotProvisioningTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotProvisioningTemplatePreProvisioningHookOutputReference <a name="IotProvisioningTemplatePreProvisioningHookOutputReference" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_provisioning_template.IotProvisioningTemplatePreProvisioningHookOutputReference;

new IotProvisioningTemplatePreProvisioningHookOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resetPayloadVersion">resetPayloadVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resetTargetArn">resetTargetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPayloadVersion` <a name="resetPayloadVersion" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resetPayloadVersion"></a>

```java
public void resetPayloadVersion()
```

##### `resetTargetArn` <a name="resetTargetArn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resetTargetArn"></a>

```java
public void resetTargetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.payloadVersionInput">payloadVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.targetArnInput">targetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.payloadVersion">payloadVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.targetArn">targetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `payloadVersionInput`<sup>Optional</sup> <a name="payloadVersionInput" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.payloadVersionInput"></a>

```java
public java.lang.String getPayloadVersionInput();
```

- *Type:* java.lang.String

---

##### `targetArnInput`<sup>Optional</sup> <a name="targetArnInput" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.targetArnInput"></a>

```java
public java.lang.String getTargetArnInput();
```

- *Type:* java.lang.String

---

##### `payloadVersion`<sup>Required</sup> <a name="payloadVersion" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.payloadVersion"></a>

```java
public java.lang.String getPayloadVersion();
```

- *Type:* java.lang.String

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.targetArn"></a>

```java
public java.lang.String getTargetArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.internalValue"></a>

```java
public IResolvable|IotProvisioningTemplatePreProvisioningHook getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a>

---


### IotProvisioningTemplateTagsList <a name="IotProvisioningTemplateTagsList" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_provisioning_template.IotProvisioningTemplateTagsList;

new IotProvisioningTemplateTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.get"></a>

```java
public IotProvisioningTemplateTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags">IotProvisioningTemplateTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotProvisioningTemplateTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags">IotProvisioningTemplateTags</a>>

---


### IotProvisioningTemplateTagsOutputReference <a name="IotProvisioningTemplateTagsOutputReference" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_provisioning_template.IotProvisioningTemplateTagsOutputReference;

new IotProvisioningTemplateTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags">IotProvisioningTemplateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotProvisioningTemplateTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags">IotProvisioningTemplateTags</a>

---



