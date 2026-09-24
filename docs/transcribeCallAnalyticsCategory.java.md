# `transcribeCallAnalyticsCategory` Submodule <a name="`transcribeCallAnalyticsCategory` Submodule" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscribeCallAnalyticsCategory <a name="TranscribeCallAnalyticsCategory" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category awscc_transcribe_call_analytics_category}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategory;

TranscribeCallAnalyticsCategory.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .categoryName(java.lang.String)
    .rules(IResolvable|java.util.List<TranscribeCallAnalyticsCategoryRules>)
//  .inputType(java.lang.String)
//  .tags(IResolvable|java.util.List<TranscribeCallAnalyticsCategoryTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.categoryName">categoryName</a></code> | <code>java.lang.String</code> | A unique name, chosen by you, for your Call Analytics category. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>></code> | Rules define a Call Analytics category. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.inputType">inputType</a></code> | <code>java.lang.String</code> | The input type associated with the specified category. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>></code> | Tags associated with the Call Analytics category. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `categoryName`<sup>Required</sup> <a name="categoryName" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.categoryName"></a>

- *Type:* java.lang.String

A unique name, chosen by you, for your Call Analytics category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#category_name TranscribeCallAnalyticsCategory#category_name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.rules"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>>

Rules define a Call Analytics category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#rules TranscribeCallAnalyticsCategory#rules}

---

##### `inputType`<sup>Optional</sup> <a name="inputType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.inputType"></a>

- *Type:* java.lang.String

The input type associated with the specified category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#input_type TranscribeCallAnalyticsCategory#input_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>>

Tags associated with the Call Analytics category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#tags TranscribeCallAnalyticsCategory#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetInputType">resetInputType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putRules"></a>

```java
public void putRules(IResolvable|java.util.List<TranscribeCallAnalyticsCategoryRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<TranscribeCallAnalyticsCategoryTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>>

---

##### `resetInputType` <a name="resetInputType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetInputType"></a>

```java
public void resetInputType()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TranscribeCallAnalyticsCategory resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isConstruct"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategory;

TranscribeCallAnalyticsCategory.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategory;

TranscribeCallAnalyticsCategory.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategory;

TranscribeCallAnalyticsCategory.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategory;

TranscribeCallAnalyticsCategory.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TranscribeCallAnalyticsCategory.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a TranscribeCallAnalyticsCategory resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TranscribeCallAnalyticsCategory to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TranscribeCallAnalyticsCategory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the TranscribeCallAnalyticsCategory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.lastUpdateTime">lastUpdateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList">TranscribeCallAnalyticsCategoryRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList">TranscribeCallAnalyticsCategoryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.categoryNameInput">categoryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.inputTypeInput">inputTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.rulesInput">rulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.categoryName">categoryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.inputType">inputType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdateTime`<sup>Required</sup> <a name="lastUpdateTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.lastUpdateTime"></a>

```java
public java.lang.String getLastUpdateTime();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.rules"></a>

```java
public TranscribeCallAnalyticsCategoryRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList">TranscribeCallAnalyticsCategoryRulesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tags"></a>

```java
public TranscribeCallAnalyticsCategoryTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList">TranscribeCallAnalyticsCategoryTagsList</a>

---

##### `categoryNameInput`<sup>Optional</sup> <a name="categoryNameInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.categoryNameInput"></a>

```java
public java.lang.String getCategoryNameInput();
```

- *Type:* java.lang.String

---

##### `inputTypeInput`<sup>Optional</sup> <a name="inputTypeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.inputTypeInput"></a>

```java
public java.lang.String getInputTypeInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.rulesInput"></a>

```java
public IResolvable|java.util.List<TranscribeCallAnalyticsCategoryRules> getRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tagsInput"></a>

```java
public IResolvable|java.util.List<TranscribeCallAnalyticsCategoryTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>>

---

##### `categoryName`<sup>Required</sup> <a name="categoryName" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.categoryName"></a>

```java
public java.lang.String getCategoryName();
```

- *Type:* java.lang.String

---

##### `inputType`<sup>Required</sup> <a name="inputType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.inputType"></a>

```java
public java.lang.String getInputType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TranscribeCallAnalyticsCategoryConfig <a name="TranscribeCallAnalyticsCategoryConfig" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryConfig;

TranscribeCallAnalyticsCategoryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .categoryName(java.lang.String)
    .rules(IResolvable|java.util.List<TranscribeCallAnalyticsCategoryRules>)
//  .inputType(java.lang.String)
//  .tags(IResolvable|java.util.List<TranscribeCallAnalyticsCategoryTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.categoryName">categoryName</a></code> | <code>java.lang.String</code> | A unique name, chosen by you, for your Call Analytics category. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>></code> | Rules define a Call Analytics category. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.inputType">inputType</a></code> | <code>java.lang.String</code> | The input type associated with the specified category. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>></code> | Tags associated with the Call Analytics category. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `categoryName`<sup>Required</sup> <a name="categoryName" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.categoryName"></a>

```java
public java.lang.String getCategoryName();
```

- *Type:* java.lang.String

A unique name, chosen by you, for your Call Analytics category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#category_name TranscribeCallAnalyticsCategory#category_name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.rules"></a>

```java
public IResolvable|java.util.List<TranscribeCallAnalyticsCategoryRules> getRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>>

Rules define a Call Analytics category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#rules TranscribeCallAnalyticsCategory#rules}

---

##### `inputType`<sup>Optional</sup> <a name="inputType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.inputType"></a>

```java
public java.lang.String getInputType();
```

- *Type:* java.lang.String

The input type associated with the specified category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#input_type TranscribeCallAnalyticsCategory#input_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.tags"></a>

```java
public IResolvable|java.util.List<TranscribeCallAnalyticsCategoryTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>>

Tags associated with the Call Analytics category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#tags TranscribeCallAnalyticsCategory#tags}

---

### TranscribeCallAnalyticsCategoryRules <a name="TranscribeCallAnalyticsCategoryRules" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryRules;

TranscribeCallAnalyticsCategoryRules.builder()
//  .interruptionFilter(TranscribeCallAnalyticsCategoryRulesInterruptionFilter)
//  .nonTalkTimeFilter(TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter)
//  .sentimentFilter(TranscribeCallAnalyticsCategoryRulesSentimentFilter)
//  .transcriptFilter(TranscribeCallAnalyticsCategoryRulesTranscriptFilter)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.interruptionFilter">interruptionFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#interruption_filter TranscribeCallAnalyticsCategory#interruption_filter}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.nonTalkTimeFilter">nonTalkTimeFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#non_talk_time_filter TranscribeCallAnalyticsCategory#non_talk_time_filter}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.sentimentFilter">sentimentFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#sentiment_filter TranscribeCallAnalyticsCategory#sentiment_filter}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.transcriptFilter">transcriptFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#transcript_filter TranscribeCallAnalyticsCategory#transcript_filter}. |

---

##### `interruptionFilter`<sup>Optional</sup> <a name="interruptionFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.interruptionFilter"></a>

```java
public TranscribeCallAnalyticsCategoryRulesInterruptionFilter getInterruptionFilter();
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#interruption_filter TranscribeCallAnalyticsCategory#interruption_filter}.

---

##### `nonTalkTimeFilter`<sup>Optional</sup> <a name="nonTalkTimeFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.nonTalkTimeFilter"></a>

```java
public TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter getNonTalkTimeFilter();
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#non_talk_time_filter TranscribeCallAnalyticsCategory#non_talk_time_filter}.

---

##### `sentimentFilter`<sup>Optional</sup> <a name="sentimentFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.sentimentFilter"></a>

```java
public TranscribeCallAnalyticsCategoryRulesSentimentFilter getSentimentFilter();
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#sentiment_filter TranscribeCallAnalyticsCategory#sentiment_filter}.

---

##### `transcriptFilter`<sup>Optional</sup> <a name="transcriptFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.transcriptFilter"></a>

```java
public TranscribeCallAnalyticsCategoryRulesTranscriptFilter getTranscriptFilter();
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#transcript_filter TranscribeCallAnalyticsCategory#transcript_filter}.

---

### TranscribeCallAnalyticsCategoryRulesInterruptionFilter <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryRulesInterruptionFilter;

TranscribeCallAnalyticsCategoryRulesInterruptionFilter.builder()
//  .absoluteTimeRange(TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange)
//  .negate(java.lang.Boolean|IResolvable)
//  .participantRole(java.lang.String)
//  .relativeTimeRange(TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange)
//  .threshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.absoluteTimeRange">absoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.negate">negate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.participantRole">participantRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.relativeTimeRange">relativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#threshold TranscribeCallAnalyticsCategory#threshold}. |

---

##### `absoluteTimeRange`<sup>Optional</sup> <a name="absoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.absoluteTimeRange"></a>

```java
public TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange getAbsoluteTimeRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}.

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.negate"></a>

```java
public java.lang.Boolean|IResolvable getNegate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}.

---

##### `participantRole`<sup>Optional</sup> <a name="participantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.participantRole"></a>

```java
public java.lang.String getParticipantRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}.

---

##### `relativeTimeRange`<sup>Optional</sup> <a name="relativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.relativeTimeRange"></a>

```java
public TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange getRelativeTimeRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#threshold TranscribeCallAnalyticsCategory#threshold}.

---

### TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange;

TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.builder()
//  .endTime(java.lang.Number)
//  .first(java.lang.Number)
//  .last(java.lang.Number)
//  .startTime(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.endTime">endTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.first">first</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.last">last</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.startTime">startTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.endTime"></a>

```java
public java.lang.Number getEndTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}.

---

##### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.first"></a>

```java
public java.lang.Number getFirst();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.last"></a>

```java
public java.lang.Number getLast();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.startTime"></a>

```java
public java.lang.Number getStartTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}.

---

### TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange;

TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.builder()
//  .endPercentage(java.lang.Number)
//  .first(java.lang.Number)
//  .last(java.lang.Number)
//  .startPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.endPercentage">endPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.first">first</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.last">last</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.startPercentage">startPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}. |

---

##### `endPercentage`<sup>Optional</sup> <a name="endPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.endPercentage"></a>

```java
public java.lang.Number getEndPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}.

---

##### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.first"></a>

```java
public java.lang.Number getFirst();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.last"></a>

```java
public java.lang.Number getLast();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `startPercentage`<sup>Optional</sup> <a name="startPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.startPercentage"></a>

```java
public java.lang.Number getStartPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}.

---

### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter;

TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.builder()
//  .absoluteTimeRange(TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange)
//  .negate(java.lang.Boolean|IResolvable)
//  .relativeTimeRange(TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange)
//  .threshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.absoluteTimeRange">absoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.negate">negate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.relativeTimeRange">relativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#threshold TranscribeCallAnalyticsCategory#threshold}. |

---

##### `absoluteTimeRange`<sup>Optional</sup> <a name="absoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.absoluteTimeRange"></a>

```java
public TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange getAbsoluteTimeRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}.

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.negate"></a>

```java
public java.lang.Boolean|IResolvable getNegate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}.

---

##### `relativeTimeRange`<sup>Optional</sup> <a name="relativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.relativeTimeRange"></a>

```java
public TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange getRelativeTimeRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#threshold TranscribeCallAnalyticsCategory#threshold}.

---

### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange;

TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.builder()
//  .endTime(java.lang.Number)
//  .first(java.lang.Number)
//  .last(java.lang.Number)
//  .startTime(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.endTime">endTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.first">first</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.last">last</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.startTime">startTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.endTime"></a>

```java
public java.lang.Number getEndTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}.

---

##### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.first"></a>

```java
public java.lang.Number getFirst();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.last"></a>

```java
public java.lang.Number getLast();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.startTime"></a>

```java
public java.lang.Number getStartTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}.

---

### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange;

TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.builder()
//  .endPercentage(java.lang.Number)
//  .first(java.lang.Number)
//  .last(java.lang.Number)
//  .startPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.endPercentage">endPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.first">first</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.last">last</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.startPercentage">startPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}. |

---

##### `endPercentage`<sup>Optional</sup> <a name="endPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.endPercentage"></a>

```java
public java.lang.Number getEndPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}.

---

##### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.first"></a>

```java
public java.lang.Number getFirst();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.last"></a>

```java
public java.lang.Number getLast();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `startPercentage`<sup>Optional</sup> <a name="startPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.startPercentage"></a>

```java
public java.lang.Number getStartPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}.

---

### TranscribeCallAnalyticsCategoryRulesSentimentFilter <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryRulesSentimentFilter;

TranscribeCallAnalyticsCategoryRulesSentimentFilter.builder()
//  .absoluteTimeRange(TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange)
//  .negate(java.lang.Boolean|IResolvable)
//  .participantRole(java.lang.String)
//  .relativeTimeRange(TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange)
//  .sentiments(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.absoluteTimeRange">absoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.negate">negate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.participantRole">participantRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.relativeTimeRange">relativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.sentiments">sentiments</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#sentiments TranscribeCallAnalyticsCategory#sentiments}. |

---

##### `absoluteTimeRange`<sup>Optional</sup> <a name="absoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.absoluteTimeRange"></a>

```java
public TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange getAbsoluteTimeRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}.

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.negate"></a>

```java
public java.lang.Boolean|IResolvable getNegate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}.

---

##### `participantRole`<sup>Optional</sup> <a name="participantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.participantRole"></a>

```java
public java.lang.String getParticipantRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}.

---

##### `relativeTimeRange`<sup>Optional</sup> <a name="relativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.relativeTimeRange"></a>

```java
public TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange getRelativeTimeRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}.

---

##### `sentiments`<sup>Optional</sup> <a name="sentiments" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.sentiments"></a>

```java
public java.util.List<java.lang.String> getSentiments();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#sentiments TranscribeCallAnalyticsCategory#sentiments}.

---

### TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange;

TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.builder()
//  .endTime(java.lang.Number)
//  .first(java.lang.Number)
//  .last(java.lang.Number)
//  .startTime(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.endTime">endTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.first">first</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.last">last</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.startTime">startTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.endTime"></a>

```java
public java.lang.Number getEndTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}.

---

##### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.first"></a>

```java
public java.lang.Number getFirst();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.last"></a>

```java
public java.lang.Number getLast();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.startTime"></a>

```java
public java.lang.Number getStartTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}.

---

### TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange;

TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.builder()
//  .endPercentage(java.lang.Number)
//  .first(java.lang.Number)
//  .last(java.lang.Number)
//  .startPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.endPercentage">endPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.first">first</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.last">last</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.startPercentage">startPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}. |

---

##### `endPercentage`<sup>Optional</sup> <a name="endPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.endPercentage"></a>

```java
public java.lang.Number getEndPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}.

---

##### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.first"></a>

```java
public java.lang.Number getFirst();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.last"></a>

```java
public java.lang.Number getLast();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `startPercentage`<sup>Optional</sup> <a name="startPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.startPercentage"></a>

```java
public java.lang.Number getStartPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}.

---

### TranscribeCallAnalyticsCategoryRulesTranscriptFilter <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryRulesTranscriptFilter;

TranscribeCallAnalyticsCategoryRulesTranscriptFilter.builder()
//  .absoluteTimeRange(TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange)
//  .negate(java.lang.Boolean|IResolvable)
//  .participantRole(java.lang.String)
//  .relativeTimeRange(TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange)
//  .targets(java.util.List<java.lang.String>)
//  .transcriptFilterType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.absoluteTimeRange">absoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.negate">negate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.participantRole">participantRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.relativeTimeRange">relativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.targets">targets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#targets TranscribeCallAnalyticsCategory#targets}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.transcriptFilterType">transcriptFilterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#transcript_filter_type TranscribeCallAnalyticsCategory#transcript_filter_type}. |

---

##### `absoluteTimeRange`<sup>Optional</sup> <a name="absoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.absoluteTimeRange"></a>

```java
public TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange getAbsoluteTimeRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}.

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.negate"></a>

```java
public java.lang.Boolean|IResolvable getNegate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}.

---

##### `participantRole`<sup>Optional</sup> <a name="participantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.participantRole"></a>

```java
public java.lang.String getParticipantRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}.

---

##### `relativeTimeRange`<sup>Optional</sup> <a name="relativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.relativeTimeRange"></a>

```java
public TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange getRelativeTimeRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}.

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.targets"></a>

```java
public java.util.List<java.lang.String> getTargets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#targets TranscribeCallAnalyticsCategory#targets}.

---

##### `transcriptFilterType`<sup>Optional</sup> <a name="transcriptFilterType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.transcriptFilterType"></a>

```java
public java.lang.String getTranscriptFilterType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#transcript_filter_type TranscribeCallAnalyticsCategory#transcript_filter_type}.

---

### TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange;

TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.builder()
//  .endTime(java.lang.Number)
//  .first(java.lang.Number)
//  .last(java.lang.Number)
//  .startTime(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.endTime">endTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.first">first</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.last">last</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.startTime">startTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.endTime"></a>

```java
public java.lang.Number getEndTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}.

---

##### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.first"></a>

```java
public java.lang.Number getFirst();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.last"></a>

```java
public java.lang.Number getLast();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.startTime"></a>

```java
public java.lang.Number getStartTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}.

---

### TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange;

TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.builder()
//  .endPercentage(java.lang.Number)
//  .first(java.lang.Number)
//  .last(java.lang.Number)
//  .startPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.endPercentage">endPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.first">first</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.last">last</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.startPercentage">startPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}. |

---

##### `endPercentage`<sup>Optional</sup> <a name="endPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.endPercentage"></a>

```java
public java.lang.Number getEndPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}.

---

##### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.first"></a>

```java
public java.lang.Number getFirst();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.last"></a>

```java
public java.lang.Number getLast();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `startPercentage`<sup>Optional</sup> <a name="startPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.startPercentage"></a>

```java
public java.lang.Number getStartPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}.

---

### TranscribeCallAnalyticsCategoryTags <a name="TranscribeCallAnalyticsCategoryTags" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryTags;

TranscribeCallAnalyticsCategoryTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#key TranscribeCallAnalyticsCategory#key}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#value TranscribeCallAnalyticsCategory#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#key TranscribeCallAnalyticsCategory#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#value TranscribeCallAnalyticsCategory#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference;

new TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetFirst">resetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetLast">resetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetFirst` <a name="resetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetFirst"></a>

```java
public void resetFirst()
```

##### `resetLast` <a name="resetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetLast"></a>

```java
public void resetLast()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.firstInput">firstInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.lastInput">lastInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.endTime">endTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.first">first</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.last">last</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.startTime">startTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.endTimeInput"></a>

```java
public java.lang.Number getEndTimeInput();
```

- *Type:* java.lang.Number

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.firstInput"></a>

```java
public java.lang.Number getFirstInput();
```

- *Type:* java.lang.Number

---

##### `lastInput`<sup>Optional</sup> <a name="lastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.lastInput"></a>

```java
public java.lang.Number getLastInput();
```

- *Type:* java.lang.Number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.startTimeInput"></a>

```java
public java.lang.Number getStartTimeInput();
```

- *Type:* java.lang.Number

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```java
public java.lang.Number getEndTime();
```

- *Type:* java.lang.Number

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```java
public java.lang.Number getFirst();
```

- *Type:* java.lang.Number

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```java
public java.lang.Number getLast();
```

- *Type:* java.lang.Number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```java
public java.lang.Number getStartTime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```java
public IResolvable|TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference;

new TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putAbsoluteTimeRange">putAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putRelativeTimeRange">putRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetAbsoluteTimeRange">resetAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetNegate">resetNegate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetParticipantRole">resetParticipantRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetRelativeTimeRange">resetRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAbsoluteTimeRange` <a name="putAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putAbsoluteTimeRange"></a>

```java
public void putAbsoluteTimeRange(TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putAbsoluteTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a>

---

##### `putRelativeTimeRange` <a name="putRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putRelativeTimeRange"></a>

```java
public void putRelativeTimeRange(TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putRelativeTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a>

---

##### `resetAbsoluteTimeRange` <a name="resetAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetAbsoluteTimeRange"></a>

```java
public void resetAbsoluteTimeRange()
```

##### `resetNegate` <a name="resetNegate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetNegate"></a>

```java
public void resetNegate()
```

##### `resetParticipantRole` <a name="resetParticipantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetParticipantRole"></a>

```java
public void resetParticipantRole()
```

##### `resetRelativeTimeRange` <a name="resetRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetRelativeTimeRange"></a>

```java
public void resetRelativeTimeRange()
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetThreshold"></a>

```java
public void resetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.absoluteTimeRange">absoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.relativeTimeRange">relativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.absoluteTimeRangeInput">absoluteTimeRangeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.negateInput">negateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.participantRoleInput">participantRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.relativeTimeRangeInput">relativeTimeRangeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.negate">negate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.participantRole">participantRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `absoluteTimeRange`<sup>Required</sup> <a name="absoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.absoluteTimeRange"></a>

```java
public TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference getAbsoluteTimeRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference</a>

---

##### `relativeTimeRange`<sup>Required</sup> <a name="relativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.relativeTimeRange"></a>

```java
public TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference getRelativeTimeRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference</a>

---

##### `absoluteTimeRangeInput`<sup>Optional</sup> <a name="absoluteTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.absoluteTimeRangeInput"></a>

```java
public IResolvable|TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange getAbsoluteTimeRangeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a>

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.negateInput"></a>

```java
public java.lang.Boolean|IResolvable getNegateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `participantRoleInput`<sup>Optional</sup> <a name="participantRoleInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.participantRoleInput"></a>

```java
public java.lang.String getParticipantRoleInput();
```

- *Type:* java.lang.String

---

##### `relativeTimeRangeInput`<sup>Optional</sup> <a name="relativeTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.relativeTimeRangeInput"></a>

```java
public IResolvable|TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange getRelativeTimeRangeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a>

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.negate"></a>

```java
public java.lang.Boolean|IResolvable getNegate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `participantRole`<sup>Required</sup> <a name="participantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.participantRole"></a>

```java
public java.lang.String getParticipantRole();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|TranscribeCallAnalyticsCategoryRulesInterruptionFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a>

---


### TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference;

new TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetEndPercentage">resetEndPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetFirst">resetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetLast">resetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetStartPercentage">resetStartPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndPercentage` <a name="resetEndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetEndPercentage"></a>

```java
public void resetEndPercentage()
```

##### `resetFirst` <a name="resetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetFirst"></a>

```java
public void resetFirst()
```

##### `resetLast` <a name="resetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetLast"></a>

```java
public void resetLast()
```

##### `resetStartPercentage` <a name="resetStartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetStartPercentage"></a>

```java
public void resetStartPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.endPercentageInput">endPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.firstInput">firstInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.lastInput">lastInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.startPercentageInput">startPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.endPercentage">endPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.first">first</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.last">last</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.startPercentage">startPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endPercentageInput`<sup>Optional</sup> <a name="endPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.endPercentageInput"></a>

```java
public java.lang.Number getEndPercentageInput();
```

- *Type:* java.lang.Number

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.firstInput"></a>

```java
public java.lang.Number getFirstInput();
```

- *Type:* java.lang.Number

---

##### `lastInput`<sup>Optional</sup> <a name="lastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.lastInput"></a>

```java
public java.lang.Number getLastInput();
```

- *Type:* java.lang.Number

---

##### `startPercentageInput`<sup>Optional</sup> <a name="startPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.startPercentageInput"></a>

```java
public java.lang.Number getStartPercentageInput();
```

- *Type:* java.lang.Number

---

##### `endPercentage`<sup>Required</sup> <a name="endPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```java
public java.lang.Number getEndPercentage();
```

- *Type:* java.lang.Number

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.first"></a>

```java
public java.lang.Number getFirst();
```

- *Type:* java.lang.Number

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.last"></a>

```java
public java.lang.Number getLast();
```

- *Type:* java.lang.Number

---

##### `startPercentage`<sup>Required</sup> <a name="startPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```java
public java.lang.Number getStartPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```java
public IResolvable|TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesList <a name="TranscribeCallAnalyticsCategoryRulesList" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryRulesList;

new TranscribeCallAnalyticsCategoryRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.get"></a>

```java
public TranscribeCallAnalyticsCategoryRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TranscribeCallAnalyticsCategoryRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>>

---


### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference;

new TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetFirst">resetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetLast">resetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetFirst` <a name="resetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetFirst"></a>

```java
public void resetFirst()
```

##### `resetLast` <a name="resetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetLast"></a>

```java
public void resetLast()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.firstInput">firstInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.lastInput">lastInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.endTime">endTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.first">first</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.last">last</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.startTime">startTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.endTimeInput"></a>

```java
public java.lang.Number getEndTimeInput();
```

- *Type:* java.lang.Number

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.firstInput"></a>

```java
public java.lang.Number getFirstInput();
```

- *Type:* java.lang.Number

---

##### `lastInput`<sup>Optional</sup> <a name="lastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.lastInput"></a>

```java
public java.lang.Number getLastInput();
```

- *Type:* java.lang.Number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.startTimeInput"></a>

```java
public java.lang.Number getStartTimeInput();
```

- *Type:* java.lang.Number

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```java
public java.lang.Number getEndTime();
```

- *Type:* java.lang.Number

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```java
public java.lang.Number getFirst();
```

- *Type:* java.lang.Number

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```java
public java.lang.Number getLast();
```

- *Type:* java.lang.Number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```java
public java.lang.Number getStartTime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```java
public IResolvable|TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference;

new TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putAbsoluteTimeRange">putAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putRelativeTimeRange">putRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetAbsoluteTimeRange">resetAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetNegate">resetNegate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetRelativeTimeRange">resetRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAbsoluteTimeRange` <a name="putAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putAbsoluteTimeRange"></a>

```java
public void putAbsoluteTimeRange(TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putAbsoluteTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a>

---

##### `putRelativeTimeRange` <a name="putRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putRelativeTimeRange"></a>

```java
public void putRelativeTimeRange(TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putRelativeTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a>

---

##### `resetAbsoluteTimeRange` <a name="resetAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetAbsoluteTimeRange"></a>

```java
public void resetAbsoluteTimeRange()
```

##### `resetNegate` <a name="resetNegate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetNegate"></a>

```java
public void resetNegate()
```

##### `resetRelativeTimeRange` <a name="resetRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetRelativeTimeRange"></a>

```java
public void resetRelativeTimeRange()
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetThreshold"></a>

```java
public void resetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.absoluteTimeRange">absoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.relativeTimeRange">relativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.absoluteTimeRangeInput">absoluteTimeRangeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.negateInput">negateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.relativeTimeRangeInput">relativeTimeRangeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.negate">negate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `absoluteTimeRange`<sup>Required</sup> <a name="absoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.absoluteTimeRange"></a>

```java
public TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference getAbsoluteTimeRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference</a>

---

##### `relativeTimeRange`<sup>Required</sup> <a name="relativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.relativeTimeRange"></a>

```java
public TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference getRelativeTimeRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference</a>

---

##### `absoluteTimeRangeInput`<sup>Optional</sup> <a name="absoluteTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.absoluteTimeRangeInput"></a>

```java
public IResolvable|TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange getAbsoluteTimeRangeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a>

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.negateInput"></a>

```java
public java.lang.Boolean|IResolvable getNegateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `relativeTimeRangeInput`<sup>Optional</sup> <a name="relativeTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.relativeTimeRangeInput"></a>

```java
public IResolvable|TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange getRelativeTimeRangeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a>

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.negate"></a>

```java
public java.lang.Boolean|IResolvable getNegate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a>

---


### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference;

new TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetEndPercentage">resetEndPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetFirst">resetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetLast">resetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetStartPercentage">resetStartPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndPercentage` <a name="resetEndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetEndPercentage"></a>

```java
public void resetEndPercentage()
```

##### `resetFirst` <a name="resetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetFirst"></a>

```java
public void resetFirst()
```

##### `resetLast` <a name="resetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetLast"></a>

```java
public void resetLast()
```

##### `resetStartPercentage` <a name="resetStartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetStartPercentage"></a>

```java
public void resetStartPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.endPercentageInput">endPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.firstInput">firstInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.lastInput">lastInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.startPercentageInput">startPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.endPercentage">endPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.first">first</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.last">last</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.startPercentage">startPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endPercentageInput`<sup>Optional</sup> <a name="endPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.endPercentageInput"></a>

```java
public java.lang.Number getEndPercentageInput();
```

- *Type:* java.lang.Number

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.firstInput"></a>

```java
public java.lang.Number getFirstInput();
```

- *Type:* java.lang.Number

---

##### `lastInput`<sup>Optional</sup> <a name="lastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.lastInput"></a>

```java
public java.lang.Number getLastInput();
```

- *Type:* java.lang.Number

---

##### `startPercentageInput`<sup>Optional</sup> <a name="startPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.startPercentageInput"></a>

```java
public java.lang.Number getStartPercentageInput();
```

- *Type:* java.lang.Number

---

##### `endPercentage`<sup>Required</sup> <a name="endPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```java
public java.lang.Number getEndPercentage();
```

- *Type:* java.lang.Number

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.first"></a>

```java
public java.lang.Number getFirst();
```

- *Type:* java.lang.Number

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.last"></a>

```java
public java.lang.Number getLast();
```

- *Type:* java.lang.Number

---

##### `startPercentage`<sup>Required</sup> <a name="startPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```java
public java.lang.Number getStartPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```java
public IResolvable|TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesOutputReference <a name="TranscribeCallAnalyticsCategoryRulesOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryRulesOutputReference;

new TranscribeCallAnalyticsCategoryRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putInterruptionFilter">putInterruptionFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putNonTalkTimeFilter">putNonTalkTimeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putSentimentFilter">putSentimentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putTranscriptFilter">putTranscriptFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetInterruptionFilter">resetInterruptionFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetNonTalkTimeFilter">resetNonTalkTimeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetSentimentFilter">resetSentimentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetTranscriptFilter">resetTranscriptFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInterruptionFilter` <a name="putInterruptionFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putInterruptionFilter"></a>

```java
public void putInterruptionFilter(TranscribeCallAnalyticsCategoryRulesInterruptionFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putInterruptionFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a>

---

##### `putNonTalkTimeFilter` <a name="putNonTalkTimeFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putNonTalkTimeFilter"></a>

```java
public void putNonTalkTimeFilter(TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putNonTalkTimeFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a>

---

##### `putSentimentFilter` <a name="putSentimentFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putSentimentFilter"></a>

```java
public void putSentimentFilter(TranscribeCallAnalyticsCategoryRulesSentimentFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putSentimentFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a>

---

##### `putTranscriptFilter` <a name="putTranscriptFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putTranscriptFilter"></a>

```java
public void putTranscriptFilter(TranscribeCallAnalyticsCategoryRulesTranscriptFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putTranscriptFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a>

---

##### `resetInterruptionFilter` <a name="resetInterruptionFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetInterruptionFilter"></a>

```java
public void resetInterruptionFilter()
```

##### `resetNonTalkTimeFilter` <a name="resetNonTalkTimeFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetNonTalkTimeFilter"></a>

```java
public void resetNonTalkTimeFilter()
```

##### `resetSentimentFilter` <a name="resetSentimentFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetSentimentFilter"></a>

```java
public void resetSentimentFilter()
```

##### `resetTranscriptFilter` <a name="resetTranscriptFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetTranscriptFilter"></a>

```java
public void resetTranscriptFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.interruptionFilter">interruptionFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.nonTalkTimeFilter">nonTalkTimeFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.sentimentFilter">sentimentFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.transcriptFilter">transcriptFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.interruptionFilterInput">interruptionFilterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.nonTalkTimeFilterInput">nonTalkTimeFilterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.sentimentFilterInput">sentimentFilterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.transcriptFilterInput">transcriptFilterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `interruptionFilter`<sup>Required</sup> <a name="interruptionFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.interruptionFilter"></a>

```java
public TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference getInterruptionFilter();
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference</a>

---

##### `nonTalkTimeFilter`<sup>Required</sup> <a name="nonTalkTimeFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.nonTalkTimeFilter"></a>

```java
public TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference getNonTalkTimeFilter();
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference</a>

---

##### `sentimentFilter`<sup>Required</sup> <a name="sentimentFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.sentimentFilter"></a>

```java
public TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference getSentimentFilter();
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference</a>

---

##### `transcriptFilter`<sup>Required</sup> <a name="transcriptFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.transcriptFilter"></a>

```java
public TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference getTranscriptFilter();
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference</a>

---

##### `interruptionFilterInput`<sup>Optional</sup> <a name="interruptionFilterInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.interruptionFilterInput"></a>

```java
public IResolvable|TranscribeCallAnalyticsCategoryRulesInterruptionFilter getInterruptionFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a>

---

##### `nonTalkTimeFilterInput`<sup>Optional</sup> <a name="nonTalkTimeFilterInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.nonTalkTimeFilterInput"></a>

```java
public IResolvable|TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter getNonTalkTimeFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a>

---

##### `sentimentFilterInput`<sup>Optional</sup> <a name="sentimentFilterInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.sentimentFilterInput"></a>

```java
public IResolvable|TranscribeCallAnalyticsCategoryRulesSentimentFilter getSentimentFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a>

---

##### `transcriptFilterInput`<sup>Optional</sup> <a name="transcriptFilterInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.transcriptFilterInput"></a>

```java
public IResolvable|TranscribeCallAnalyticsCategoryRulesTranscriptFilter getTranscriptFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|TranscribeCallAnalyticsCategoryRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>

---


### TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference;

new TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetFirst">resetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetLast">resetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetFirst` <a name="resetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetFirst"></a>

```java
public void resetFirst()
```

##### `resetLast` <a name="resetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetLast"></a>

```java
public void resetLast()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.firstInput">firstInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.lastInput">lastInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.endTime">endTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.first">first</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.last">last</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.startTime">startTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.endTimeInput"></a>

```java
public java.lang.Number getEndTimeInput();
```

- *Type:* java.lang.Number

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.firstInput"></a>

```java
public java.lang.Number getFirstInput();
```

- *Type:* java.lang.Number

---

##### `lastInput`<sup>Optional</sup> <a name="lastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.lastInput"></a>

```java
public java.lang.Number getLastInput();
```

- *Type:* java.lang.Number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.startTimeInput"></a>

```java
public java.lang.Number getStartTimeInput();
```

- *Type:* java.lang.Number

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```java
public java.lang.Number getEndTime();
```

- *Type:* java.lang.Number

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```java
public java.lang.Number getFirst();
```

- *Type:* java.lang.Number

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```java
public java.lang.Number getLast();
```

- *Type:* java.lang.Number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```java
public java.lang.Number getStartTime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```java
public IResolvable|TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference;

new TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putAbsoluteTimeRange">putAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putRelativeTimeRange">putRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetAbsoluteTimeRange">resetAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetNegate">resetNegate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetParticipantRole">resetParticipantRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetRelativeTimeRange">resetRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetSentiments">resetSentiments</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAbsoluteTimeRange` <a name="putAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putAbsoluteTimeRange"></a>

```java
public void putAbsoluteTimeRange(TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putAbsoluteTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a>

---

##### `putRelativeTimeRange` <a name="putRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putRelativeTimeRange"></a>

```java
public void putRelativeTimeRange(TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putRelativeTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a>

---

##### `resetAbsoluteTimeRange` <a name="resetAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetAbsoluteTimeRange"></a>

```java
public void resetAbsoluteTimeRange()
```

##### `resetNegate` <a name="resetNegate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetNegate"></a>

```java
public void resetNegate()
```

##### `resetParticipantRole` <a name="resetParticipantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetParticipantRole"></a>

```java
public void resetParticipantRole()
```

##### `resetRelativeTimeRange` <a name="resetRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetRelativeTimeRange"></a>

```java
public void resetRelativeTimeRange()
```

##### `resetSentiments` <a name="resetSentiments" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetSentiments"></a>

```java
public void resetSentiments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.absoluteTimeRange">absoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.relativeTimeRange">relativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.absoluteTimeRangeInput">absoluteTimeRangeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.negateInput">negateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.participantRoleInput">participantRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.relativeTimeRangeInput">relativeTimeRangeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.sentimentsInput">sentimentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.negate">negate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.participantRole">participantRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.sentiments">sentiments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `absoluteTimeRange`<sup>Required</sup> <a name="absoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.absoluteTimeRange"></a>

```java
public TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference getAbsoluteTimeRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference</a>

---

##### `relativeTimeRange`<sup>Required</sup> <a name="relativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.relativeTimeRange"></a>

```java
public TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference getRelativeTimeRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference</a>

---

##### `absoluteTimeRangeInput`<sup>Optional</sup> <a name="absoluteTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.absoluteTimeRangeInput"></a>

```java
public IResolvable|TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange getAbsoluteTimeRangeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a>

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.negateInput"></a>

```java
public java.lang.Boolean|IResolvable getNegateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `participantRoleInput`<sup>Optional</sup> <a name="participantRoleInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.participantRoleInput"></a>

```java
public java.lang.String getParticipantRoleInput();
```

- *Type:* java.lang.String

---

##### `relativeTimeRangeInput`<sup>Optional</sup> <a name="relativeTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.relativeTimeRangeInput"></a>

```java
public IResolvable|TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange getRelativeTimeRangeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a>

---

##### `sentimentsInput`<sup>Optional</sup> <a name="sentimentsInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.sentimentsInput"></a>

```java
public java.util.List<java.lang.String> getSentimentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.negate"></a>

```java
public java.lang.Boolean|IResolvable getNegate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `participantRole`<sup>Required</sup> <a name="participantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.participantRole"></a>

```java
public java.lang.String getParticipantRole();
```

- *Type:* java.lang.String

---

##### `sentiments`<sup>Required</sup> <a name="sentiments" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.sentiments"></a>

```java
public java.util.List<java.lang.String> getSentiments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|TranscribeCallAnalyticsCategoryRulesSentimentFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a>

---


### TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference;

new TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetEndPercentage">resetEndPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetFirst">resetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetLast">resetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetStartPercentage">resetStartPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndPercentage` <a name="resetEndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetEndPercentage"></a>

```java
public void resetEndPercentage()
```

##### `resetFirst` <a name="resetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetFirst"></a>

```java
public void resetFirst()
```

##### `resetLast` <a name="resetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetLast"></a>

```java
public void resetLast()
```

##### `resetStartPercentage` <a name="resetStartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetStartPercentage"></a>

```java
public void resetStartPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.endPercentageInput">endPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.firstInput">firstInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.lastInput">lastInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.startPercentageInput">startPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.endPercentage">endPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.first">first</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.last">last</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.startPercentage">startPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endPercentageInput`<sup>Optional</sup> <a name="endPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.endPercentageInput"></a>

```java
public java.lang.Number getEndPercentageInput();
```

- *Type:* java.lang.Number

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.firstInput"></a>

```java
public java.lang.Number getFirstInput();
```

- *Type:* java.lang.Number

---

##### `lastInput`<sup>Optional</sup> <a name="lastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.lastInput"></a>

```java
public java.lang.Number getLastInput();
```

- *Type:* java.lang.Number

---

##### `startPercentageInput`<sup>Optional</sup> <a name="startPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.startPercentageInput"></a>

```java
public java.lang.Number getStartPercentageInput();
```

- *Type:* java.lang.Number

---

##### `endPercentage`<sup>Required</sup> <a name="endPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```java
public java.lang.Number getEndPercentage();
```

- *Type:* java.lang.Number

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.first"></a>

```java
public java.lang.Number getFirst();
```

- *Type:* java.lang.Number

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.last"></a>

```java
public java.lang.Number getLast();
```

- *Type:* java.lang.Number

---

##### `startPercentage`<sup>Required</sup> <a name="startPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```java
public java.lang.Number getStartPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```java
public IResolvable|TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference;

new TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetFirst">resetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetLast">resetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetFirst` <a name="resetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetFirst"></a>

```java
public void resetFirst()
```

##### `resetLast` <a name="resetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetLast"></a>

```java
public void resetLast()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.firstInput">firstInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.lastInput">lastInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.endTime">endTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.first">first</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.last">last</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.startTime">startTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.endTimeInput"></a>

```java
public java.lang.Number getEndTimeInput();
```

- *Type:* java.lang.Number

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.firstInput"></a>

```java
public java.lang.Number getFirstInput();
```

- *Type:* java.lang.Number

---

##### `lastInput`<sup>Optional</sup> <a name="lastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.lastInput"></a>

```java
public java.lang.Number getLastInput();
```

- *Type:* java.lang.Number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.startTimeInput"></a>

```java
public java.lang.Number getStartTimeInput();
```

- *Type:* java.lang.Number

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```java
public java.lang.Number getEndTime();
```

- *Type:* java.lang.Number

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```java
public java.lang.Number getFirst();
```

- *Type:* java.lang.Number

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```java
public java.lang.Number getLast();
```

- *Type:* java.lang.Number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```java
public java.lang.Number getStartTime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```java
public IResolvable|TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference;

new TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putAbsoluteTimeRange">putAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putRelativeTimeRange">putRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetAbsoluteTimeRange">resetAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetNegate">resetNegate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetParticipantRole">resetParticipantRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetRelativeTimeRange">resetRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetTargets">resetTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetTranscriptFilterType">resetTranscriptFilterType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAbsoluteTimeRange` <a name="putAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putAbsoluteTimeRange"></a>

```java
public void putAbsoluteTimeRange(TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putAbsoluteTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a>

---

##### `putRelativeTimeRange` <a name="putRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putRelativeTimeRange"></a>

```java
public void putRelativeTimeRange(TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putRelativeTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a>

---

##### `resetAbsoluteTimeRange` <a name="resetAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetAbsoluteTimeRange"></a>

```java
public void resetAbsoluteTimeRange()
```

##### `resetNegate` <a name="resetNegate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetNegate"></a>

```java
public void resetNegate()
```

##### `resetParticipantRole` <a name="resetParticipantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetParticipantRole"></a>

```java
public void resetParticipantRole()
```

##### `resetRelativeTimeRange` <a name="resetRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetRelativeTimeRange"></a>

```java
public void resetRelativeTimeRange()
```

##### `resetTargets` <a name="resetTargets" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetTargets"></a>

```java
public void resetTargets()
```

##### `resetTranscriptFilterType` <a name="resetTranscriptFilterType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetTranscriptFilterType"></a>

```java
public void resetTranscriptFilterType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.absoluteTimeRange">absoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.relativeTimeRange">relativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.absoluteTimeRangeInput">absoluteTimeRangeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.negateInput">negateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.participantRoleInput">participantRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.relativeTimeRangeInput">relativeTimeRangeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.targetsInput">targetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.transcriptFilterTypeInput">transcriptFilterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.negate">negate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.participantRole">participantRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.targets">targets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.transcriptFilterType">transcriptFilterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `absoluteTimeRange`<sup>Required</sup> <a name="absoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.absoluteTimeRange"></a>

```java
public TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference getAbsoluteTimeRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference</a>

---

##### `relativeTimeRange`<sup>Required</sup> <a name="relativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.relativeTimeRange"></a>

```java
public TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference getRelativeTimeRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference</a>

---

##### `absoluteTimeRangeInput`<sup>Optional</sup> <a name="absoluteTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.absoluteTimeRangeInput"></a>

```java
public IResolvable|TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange getAbsoluteTimeRangeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a>

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.negateInput"></a>

```java
public java.lang.Boolean|IResolvable getNegateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `participantRoleInput`<sup>Optional</sup> <a name="participantRoleInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.participantRoleInput"></a>

```java
public java.lang.String getParticipantRoleInput();
```

- *Type:* java.lang.String

---

##### `relativeTimeRangeInput`<sup>Optional</sup> <a name="relativeTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.relativeTimeRangeInput"></a>

```java
public IResolvable|TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange getRelativeTimeRangeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a>

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.targetsInput"></a>

```java
public java.util.List<java.lang.String> getTargetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `transcriptFilterTypeInput`<sup>Optional</sup> <a name="transcriptFilterTypeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.transcriptFilterTypeInput"></a>

```java
public java.lang.String getTranscriptFilterTypeInput();
```

- *Type:* java.lang.String

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.negate"></a>

```java
public java.lang.Boolean|IResolvable getNegate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `participantRole`<sup>Required</sup> <a name="participantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.participantRole"></a>

```java
public java.lang.String getParticipantRole();
```

- *Type:* java.lang.String

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.targets"></a>

```java
public java.util.List<java.lang.String> getTargets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `transcriptFilterType`<sup>Required</sup> <a name="transcriptFilterType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.transcriptFilterType"></a>

```java
public java.lang.String getTranscriptFilterType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|TranscribeCallAnalyticsCategoryRulesTranscriptFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a>

---


### TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference;

new TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetEndPercentage">resetEndPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetFirst">resetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetLast">resetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetStartPercentage">resetStartPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndPercentage` <a name="resetEndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetEndPercentage"></a>

```java
public void resetEndPercentage()
```

##### `resetFirst` <a name="resetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetFirst"></a>

```java
public void resetFirst()
```

##### `resetLast` <a name="resetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetLast"></a>

```java
public void resetLast()
```

##### `resetStartPercentage` <a name="resetStartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetStartPercentage"></a>

```java
public void resetStartPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.endPercentageInput">endPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.firstInput">firstInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.lastInput">lastInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.startPercentageInput">startPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.endPercentage">endPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.first">first</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.last">last</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.startPercentage">startPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endPercentageInput`<sup>Optional</sup> <a name="endPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.endPercentageInput"></a>

```java
public java.lang.Number getEndPercentageInput();
```

- *Type:* java.lang.Number

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.firstInput"></a>

```java
public java.lang.Number getFirstInput();
```

- *Type:* java.lang.Number

---

##### `lastInput`<sup>Optional</sup> <a name="lastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.lastInput"></a>

```java
public java.lang.Number getLastInput();
```

- *Type:* java.lang.Number

---

##### `startPercentageInput`<sup>Optional</sup> <a name="startPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.startPercentageInput"></a>

```java
public java.lang.Number getStartPercentageInput();
```

- *Type:* java.lang.Number

---

##### `endPercentage`<sup>Required</sup> <a name="endPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```java
public java.lang.Number getEndPercentage();
```

- *Type:* java.lang.Number

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.first"></a>

```java
public java.lang.Number getFirst();
```

- *Type:* java.lang.Number

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.last"></a>

```java
public java.lang.Number getLast();
```

- *Type:* java.lang.Number

---

##### `startPercentage`<sup>Required</sup> <a name="startPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```java
public java.lang.Number getStartPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```java
public IResolvable|TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a>

---


### TranscribeCallAnalyticsCategoryTagsList <a name="TranscribeCallAnalyticsCategoryTagsList" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryTagsList;

new TranscribeCallAnalyticsCategoryTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.get"></a>

```java
public TranscribeCallAnalyticsCategoryTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TranscribeCallAnalyticsCategoryTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>>

---


### TranscribeCallAnalyticsCategoryTagsOutputReference <a name="TranscribeCallAnalyticsCategoryTagsOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transcribe_call_analytics_category.TranscribeCallAnalyticsCategoryTagsOutputReference;

new TranscribeCallAnalyticsCategoryTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|TranscribeCallAnalyticsCategoryTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>

---



