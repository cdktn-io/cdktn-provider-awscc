# `cleanroomsPrivacyBudgetTemplate` Submodule <a name="`cleanroomsPrivacyBudgetTemplate` Submodule" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsPrivacyBudgetTemplate <a name="CleanroomsPrivacyBudgetTemplate" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template awscc_cleanrooms_privacy_budget_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_privacy_budget_template.CleanroomsPrivacyBudgetTemplate;

CleanroomsPrivacyBudgetTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .autoRefresh(java.lang.String)
    .membershipIdentifier(java.lang.String)
    .parameters(CleanroomsPrivacyBudgetTemplateParameters)
    .privacyBudgetType(java.lang.String)
//  .tags(IResolvable|java.util.List<CleanroomsPrivacyBudgetTemplateTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.autoRefresh">autoRefresh</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#auto_refresh CleanroomsPrivacyBudgetTemplate#auto_refresh}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.membershipIdentifier">membershipIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#membership_identifier CleanroomsPrivacyBudgetTemplate#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#parameters CleanroomsPrivacyBudgetTemplate#parameters}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.privacyBudgetType">privacyBudgetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#privacy_budget_type CleanroomsPrivacyBudgetTemplate#privacy_budget_type}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>></code> | An arbitrary set of tags (key-value pairs) for this cleanrooms privacy budget template. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoRefresh`<sup>Required</sup> <a name="autoRefresh" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.autoRefresh"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#auto_refresh CleanroomsPrivacyBudgetTemplate#auto_refresh}.

---

##### `membershipIdentifier`<sup>Required</sup> <a name="membershipIdentifier" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.membershipIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#membership_identifier CleanroomsPrivacyBudgetTemplate#membership_identifier}.

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.parameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#parameters CleanroomsPrivacyBudgetTemplate#parameters}.

---

##### `privacyBudgetType`<sup>Required</sup> <a name="privacyBudgetType" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.privacyBudgetType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#privacy_budget_type CleanroomsPrivacyBudgetTemplate#privacy_budget_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>>

An arbitrary set of tags (key-value pairs) for this cleanrooms privacy budget template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#tags CleanroomsPrivacyBudgetTemplate#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putParameters` <a name="putParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putParameters"></a>

```java
public void putParameters(CleanroomsPrivacyBudgetTemplateParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CleanroomsPrivacyBudgetTemplateTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CleanroomsPrivacyBudgetTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_privacy_budget_template.CleanroomsPrivacyBudgetTemplate;

CleanroomsPrivacyBudgetTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_privacy_budget_template.CleanroomsPrivacyBudgetTemplate;

CleanroomsPrivacyBudgetTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_privacy_budget_template.CleanroomsPrivacyBudgetTemplate;

CleanroomsPrivacyBudgetTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_privacy_budget_template.CleanroomsPrivacyBudgetTemplate;

CleanroomsPrivacyBudgetTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CleanroomsPrivacyBudgetTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CleanroomsPrivacyBudgetTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CleanroomsPrivacyBudgetTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CleanroomsPrivacyBudgetTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsPrivacyBudgetTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.collaborationArn">collaborationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.collaborationIdentifier">collaborationIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipArn">membershipArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference">CleanroomsPrivacyBudgetTemplateParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetTemplateIdentifier">privacyBudgetTemplateIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList">CleanroomsPrivacyBudgetTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.autoRefreshInput">autoRefreshInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipIdentifierInput">membershipIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.parametersInput">parametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetTypeInput">privacyBudgetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.autoRefresh">autoRefresh</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipIdentifier">membershipIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetType">privacyBudgetType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `collaborationArn`<sup>Required</sup> <a name="collaborationArn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.collaborationArn"></a>

```java
public java.lang.String getCollaborationArn();
```

- *Type:* java.lang.String

---

##### `collaborationIdentifier`<sup>Required</sup> <a name="collaborationIdentifier" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.collaborationIdentifier"></a>

```java
public java.lang.String getCollaborationIdentifier();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `membershipArn`<sup>Required</sup> <a name="membershipArn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipArn"></a>

```java
public java.lang.String getMembershipArn();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.parameters"></a>

```java
public CleanroomsPrivacyBudgetTemplateParametersOutputReference getParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference">CleanroomsPrivacyBudgetTemplateParametersOutputReference</a>

---

##### `privacyBudgetTemplateIdentifier`<sup>Required</sup> <a name="privacyBudgetTemplateIdentifier" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetTemplateIdentifier"></a>

```java
public java.lang.String getPrivacyBudgetTemplateIdentifier();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tags"></a>

```java
public CleanroomsPrivacyBudgetTemplateTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList">CleanroomsPrivacyBudgetTemplateTagsList</a>

---

##### `autoRefreshInput`<sup>Optional</sup> <a name="autoRefreshInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.autoRefreshInput"></a>

```java
public java.lang.String getAutoRefreshInput();
```

- *Type:* java.lang.String

---

##### `membershipIdentifierInput`<sup>Optional</sup> <a name="membershipIdentifierInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipIdentifierInput"></a>

```java
public java.lang.String getMembershipIdentifierInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.parametersInput"></a>

```java
public IResolvable|CleanroomsPrivacyBudgetTemplateParameters getParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a>

---

##### `privacyBudgetTypeInput`<sup>Optional</sup> <a name="privacyBudgetTypeInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetTypeInput"></a>

```java
public java.lang.String getPrivacyBudgetTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CleanroomsPrivacyBudgetTemplateTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>>

---

##### `autoRefresh`<sup>Required</sup> <a name="autoRefresh" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.autoRefresh"></a>

```java
public java.lang.String getAutoRefresh();
```

- *Type:* java.lang.String

---

##### `membershipIdentifier`<sup>Required</sup> <a name="membershipIdentifier" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipIdentifier"></a>

```java
public java.lang.String getMembershipIdentifier();
```

- *Type:* java.lang.String

---

##### `privacyBudgetType`<sup>Required</sup> <a name="privacyBudgetType" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetType"></a>

```java
public java.lang.String getPrivacyBudgetType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsPrivacyBudgetTemplateConfig <a name="CleanroomsPrivacyBudgetTemplateConfig" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_privacy_budget_template.CleanroomsPrivacyBudgetTemplateConfig;

CleanroomsPrivacyBudgetTemplateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .autoRefresh(java.lang.String)
    .membershipIdentifier(java.lang.String)
    .parameters(CleanroomsPrivacyBudgetTemplateParameters)
    .privacyBudgetType(java.lang.String)
//  .tags(IResolvable|java.util.List<CleanroomsPrivacyBudgetTemplateTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.autoRefresh">autoRefresh</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#auto_refresh CleanroomsPrivacyBudgetTemplate#auto_refresh}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.membershipIdentifier">membershipIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#membership_identifier CleanroomsPrivacyBudgetTemplate#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#parameters CleanroomsPrivacyBudgetTemplate#parameters}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.privacyBudgetType">privacyBudgetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#privacy_budget_type CleanroomsPrivacyBudgetTemplate#privacy_budget_type}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>></code> | An arbitrary set of tags (key-value pairs) for this cleanrooms privacy budget template. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoRefresh`<sup>Required</sup> <a name="autoRefresh" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.autoRefresh"></a>

```java
public java.lang.String getAutoRefresh();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#auto_refresh CleanroomsPrivacyBudgetTemplate#auto_refresh}.

---

##### `membershipIdentifier`<sup>Required</sup> <a name="membershipIdentifier" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.membershipIdentifier"></a>

```java
public java.lang.String getMembershipIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#membership_identifier CleanroomsPrivacyBudgetTemplate#membership_identifier}.

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.parameters"></a>

```java
public CleanroomsPrivacyBudgetTemplateParameters getParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#parameters CleanroomsPrivacyBudgetTemplate#parameters}.

---

##### `privacyBudgetType`<sup>Required</sup> <a name="privacyBudgetType" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.privacyBudgetType"></a>

```java
public java.lang.String getPrivacyBudgetType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#privacy_budget_type CleanroomsPrivacyBudgetTemplate#privacy_budget_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CleanroomsPrivacyBudgetTemplateTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>>

An arbitrary set of tags (key-value pairs) for this cleanrooms privacy budget template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#tags CleanroomsPrivacyBudgetTemplate#tags}

---

### CleanroomsPrivacyBudgetTemplateParameters <a name="CleanroomsPrivacyBudgetTemplateParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_privacy_budget_template.CleanroomsPrivacyBudgetTemplateParameters;

CleanroomsPrivacyBudgetTemplateParameters.builder()
//  .budgetParameters(IResolvable|java.util.List<CleanroomsPrivacyBudgetTemplateParametersBudgetParameters>)
//  .epsilon(java.lang.Number)
//  .resourceArn(java.lang.String)
//  .usersNoisePerQuery(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.budgetParameters">budgetParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#budget_parameters CleanroomsPrivacyBudgetTemplate#budget_parameters}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.epsilon">epsilon</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#epsilon CleanroomsPrivacyBudgetTemplate#epsilon}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#resource_arn CleanroomsPrivacyBudgetTemplate#resource_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.usersNoisePerQuery">usersNoisePerQuery</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#users_noise_per_query CleanroomsPrivacyBudgetTemplate#users_noise_per_query}. |

---

##### `budgetParameters`<sup>Optional</sup> <a name="budgetParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.budgetParameters"></a>

```java
public IResolvable|java.util.List<CleanroomsPrivacyBudgetTemplateParametersBudgetParameters> getBudgetParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#budget_parameters CleanroomsPrivacyBudgetTemplate#budget_parameters}.

---

##### `epsilon`<sup>Optional</sup> <a name="epsilon" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.epsilon"></a>

```java
public java.lang.Number getEpsilon();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#epsilon CleanroomsPrivacyBudgetTemplate#epsilon}.

---

##### `resourceArn`<sup>Optional</sup> <a name="resourceArn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#resource_arn CleanroomsPrivacyBudgetTemplate#resource_arn}.

---

##### `usersNoisePerQuery`<sup>Optional</sup> <a name="usersNoisePerQuery" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.usersNoisePerQuery"></a>

```java
public java.lang.Number getUsersNoisePerQuery();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#users_noise_per_query CleanroomsPrivacyBudgetTemplate#users_noise_per_query}.

---

### CleanroomsPrivacyBudgetTemplateParametersBudgetParameters <a name="CleanroomsPrivacyBudgetTemplateParametersBudgetParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_privacy_budget_template.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters;

CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.builder()
//  .autoRefresh(java.lang.String)
//  .budget(java.lang.Number)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.autoRefresh">autoRefresh</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#auto_refresh CleanroomsPrivacyBudgetTemplate#auto_refresh}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.budget">budget</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#budget CleanroomsPrivacyBudgetTemplate#budget}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#type CleanroomsPrivacyBudgetTemplate#type}. |

---

##### `autoRefresh`<sup>Optional</sup> <a name="autoRefresh" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.autoRefresh"></a>

```java
public java.lang.String getAutoRefresh();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#auto_refresh CleanroomsPrivacyBudgetTemplate#auto_refresh}.

---

##### `budget`<sup>Optional</sup> <a name="budget" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.budget"></a>

```java
public java.lang.Number getBudget();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#budget CleanroomsPrivacyBudgetTemplate#budget}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#type CleanroomsPrivacyBudgetTemplate#type}.

---

### CleanroomsPrivacyBudgetTemplateTags <a name="CleanroomsPrivacyBudgetTemplateTags" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_privacy_budget_template.CleanroomsPrivacyBudgetTemplateTags;

CleanroomsPrivacyBudgetTemplateTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#key CleanroomsPrivacyBudgetTemplate#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#value CleanroomsPrivacyBudgetTemplate#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#key CleanroomsPrivacyBudgetTemplate#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_privacy_budget_template#value CleanroomsPrivacyBudgetTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList <a name="CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_privacy_budget_template.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList;

new CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.get"></a>

```java
public CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CleanroomsPrivacyBudgetTemplateParametersBudgetParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>>

---


### CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference <a name="CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_privacy_budget_template.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference;

new CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetAutoRefresh">resetAutoRefresh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetBudget">resetBudget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoRefresh` <a name="resetAutoRefresh" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetAutoRefresh"></a>

```java
public void resetAutoRefresh()
```

##### `resetBudget` <a name="resetBudget" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetBudget"></a>

```java
public void resetBudget()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.autoRefreshInput">autoRefreshInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.budgetInput">budgetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.autoRefresh">autoRefresh</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.budget">budget</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoRefreshInput`<sup>Optional</sup> <a name="autoRefreshInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.autoRefreshInput"></a>

```java
public java.lang.String getAutoRefreshInput();
```

- *Type:* java.lang.String

---

##### `budgetInput`<sup>Optional</sup> <a name="budgetInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.budgetInput"></a>

```java
public java.lang.Number getBudgetInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `autoRefresh`<sup>Required</sup> <a name="autoRefresh" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.autoRefresh"></a>

```java
public java.lang.String getAutoRefresh();
```

- *Type:* java.lang.String

---

##### `budget`<sup>Required</sup> <a name="budget" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.budget"></a>

```java
public java.lang.Number getBudget();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|CleanroomsPrivacyBudgetTemplateParametersBudgetParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>

---


### CleanroomsPrivacyBudgetTemplateParametersOutputReference <a name="CleanroomsPrivacyBudgetTemplateParametersOutputReference" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_privacy_budget_template.CleanroomsPrivacyBudgetTemplateParametersOutputReference;

new CleanroomsPrivacyBudgetTemplateParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.putBudgetParameters">putBudgetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetBudgetParameters">resetBudgetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetEpsilon">resetEpsilon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetResourceArn">resetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetUsersNoisePerQuery">resetUsersNoisePerQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBudgetParameters` <a name="putBudgetParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.putBudgetParameters"></a>

```java
public void putBudgetParameters(IResolvable|java.util.List<CleanroomsPrivacyBudgetTemplateParametersBudgetParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.putBudgetParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>>

---

##### `resetBudgetParameters` <a name="resetBudgetParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetBudgetParameters"></a>

```java
public void resetBudgetParameters()
```

##### `resetEpsilon` <a name="resetEpsilon" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetEpsilon"></a>

```java
public void resetEpsilon()
```

##### `resetResourceArn` <a name="resetResourceArn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetResourceArn"></a>

```java
public void resetResourceArn()
```

##### `resetUsersNoisePerQuery` <a name="resetUsersNoisePerQuery" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetUsersNoisePerQuery"></a>

```java
public void resetUsersNoisePerQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.budgetParameters">budgetParameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList">CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.budgetParametersInput">budgetParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.epsilonInput">epsilonInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.usersNoisePerQueryInput">usersNoisePerQueryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.epsilon">epsilon</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.usersNoisePerQuery">usersNoisePerQuery</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `budgetParameters`<sup>Required</sup> <a name="budgetParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.budgetParameters"></a>

```java
public CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList getBudgetParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList">CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList</a>

---

##### `budgetParametersInput`<sup>Optional</sup> <a name="budgetParametersInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.budgetParametersInput"></a>

```java
public IResolvable|java.util.List<CleanroomsPrivacyBudgetTemplateParametersBudgetParameters> getBudgetParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>>

---

##### `epsilonInput`<sup>Optional</sup> <a name="epsilonInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.epsilonInput"></a>

```java
public java.lang.Number getEpsilonInput();
```

- *Type:* java.lang.Number

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.resourceArnInput"></a>

```java
public java.lang.String getResourceArnInput();
```

- *Type:* java.lang.String

---

##### `usersNoisePerQueryInput`<sup>Optional</sup> <a name="usersNoisePerQueryInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.usersNoisePerQueryInput"></a>

```java
public java.lang.Number getUsersNoisePerQueryInput();
```

- *Type:* java.lang.Number

---

##### `epsilon`<sup>Required</sup> <a name="epsilon" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.epsilon"></a>

```java
public java.lang.Number getEpsilon();
```

- *Type:* java.lang.Number

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

##### `usersNoisePerQuery`<sup>Required</sup> <a name="usersNoisePerQuery" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.usersNoisePerQuery"></a>

```java
public java.lang.Number getUsersNoisePerQuery();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|CleanroomsPrivacyBudgetTemplateParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a>

---


### CleanroomsPrivacyBudgetTemplateTagsList <a name="CleanroomsPrivacyBudgetTemplateTagsList" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_privacy_budget_template.CleanroomsPrivacyBudgetTemplateTagsList;

new CleanroomsPrivacyBudgetTemplateTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.get"></a>

```java
public CleanroomsPrivacyBudgetTemplateTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CleanroomsPrivacyBudgetTemplateTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>>

---


### CleanroomsPrivacyBudgetTemplateTagsOutputReference <a name="CleanroomsPrivacyBudgetTemplateTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_privacy_budget_template.CleanroomsPrivacyBudgetTemplateTagsOutputReference;

new CleanroomsPrivacyBudgetTemplateTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CleanroomsPrivacyBudgetTemplateTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>

---



