# `casesRelatedItem` Submodule <a name="`casesRelatedItem` Submodule" id="@cdktn/provider-awscc.casesRelatedItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CasesRelatedItem <a name="CasesRelatedItem" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item awscc_cases_related_item}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_related_item.CasesRelatedItem;

CasesRelatedItem.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .caseId(java.lang.String)
    .content(CasesRelatedItemContent)
    .domainId(java.lang.String)
    .type(java.lang.String)
//  .tags(IResolvable|java.util.List<CasesRelatedItemTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.caseId">caseId</a></code> | <code>java.lang.String</code> | A unique identifier of the case. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a></code> | The content of a related item to be created. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.domainId">domainId</a></code> | <code>java.lang.String</code> | The unique identifier of the Cases domain. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of a related item. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>></code> | A list of tags on the related item. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `caseId`<sup>Required</sup> <a name="caseId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.caseId"></a>

- *Type:* java.lang.String

A unique identifier of the case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#case_id CasesRelatedItem#case_id}

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.content"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a>

The content of a related item to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#content CasesRelatedItem#content}

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.domainId"></a>

- *Type:* java.lang.String

The unique identifier of the Cases domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#domain_id CasesRelatedItem#domain_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of a related item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#type CasesRelatedItem#type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>>

A list of tags on the related item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#tags CasesRelatedItem#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.putContent">putContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContent` <a name="putContent" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.putContent"></a>

```java
public void putContent(CasesRelatedItemContent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CasesRelatedItemTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CasesRelatedItem resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cases_related_item.CasesRelatedItem;

CasesRelatedItem.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cases_related_item.CasesRelatedItem;

CasesRelatedItem.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cases_related_item.CasesRelatedItem;

CasesRelatedItem.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cases_related_item.CasesRelatedItem;

CasesRelatedItem.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CasesRelatedItem.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CasesRelatedItem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CasesRelatedItem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CasesRelatedItem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CasesRelatedItem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference">CasesRelatedItemContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.relatedItemArn">relatedItemArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.relatedItemId">relatedItemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList">CasesRelatedItemTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.caseIdInput">caseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.contentInput">contentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.domainIdInput">domainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.caseId">caseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.content"></a>

```java
public CasesRelatedItemContentOutputReference getContent();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference">CasesRelatedItemContentOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `relatedItemArn`<sup>Required</sup> <a name="relatedItemArn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.relatedItemArn"></a>

```java
public java.lang.String getRelatedItemArn();
```

- *Type:* java.lang.String

---

##### `relatedItemId`<sup>Required</sup> <a name="relatedItemId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.relatedItemId"></a>

```java
public java.lang.String getRelatedItemId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.tags"></a>

```java
public CasesRelatedItemTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList">CasesRelatedItemTagsList</a>

---

##### `caseIdInput`<sup>Optional</sup> <a name="caseIdInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.caseIdInput"></a>

```java
public java.lang.String getCaseIdInput();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.contentInput"></a>

```java
public IResolvable|CasesRelatedItemContent getContentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a>

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.domainIdInput"></a>

```java
public java.lang.String getDomainIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CasesRelatedItemTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `caseId`<sup>Required</sup> <a name="caseId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.caseId"></a>

```java
public java.lang.String getCaseId();
```

- *Type:* java.lang.String

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CasesRelatedItemConfig <a name="CasesRelatedItemConfig" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_related_item.CasesRelatedItemConfig;

CasesRelatedItemConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .caseId(java.lang.String)
    .content(CasesRelatedItemContent)
    .domainId(java.lang.String)
    .type(java.lang.String)
//  .tags(IResolvable|java.util.List<CasesRelatedItemTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.caseId">caseId</a></code> | <code>java.lang.String</code> | A unique identifier of the case. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a></code> | The content of a related item to be created. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.domainId">domainId</a></code> | <code>java.lang.String</code> | The unique identifier of the Cases domain. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of a related item. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>></code> | A list of tags on the related item. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `caseId`<sup>Required</sup> <a name="caseId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.caseId"></a>

```java
public java.lang.String getCaseId();
```

- *Type:* java.lang.String

A unique identifier of the case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#case_id CasesRelatedItem#case_id}

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.content"></a>

```java
public CasesRelatedItemContent getContent();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a>

The content of a related item to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#content CasesRelatedItem#content}

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

The unique identifier of the Cases domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#domain_id CasesRelatedItem#domain_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of a related item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#type CasesRelatedItem#type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CasesRelatedItemTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>>

A list of tags on the related item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#tags CasesRelatedItem#tags}

---

### CasesRelatedItemContent <a name="CasesRelatedItemContent" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_related_item.CasesRelatedItemContent;

CasesRelatedItemContent.builder()
//  .comment(CasesRelatedItemContentComment)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent.property.comment">comment</a></code> | <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a></code> | Represents a comment. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent.property.comment"></a>

```java
public CasesRelatedItemContentComment getComment();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a>

Represents a comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#comment CasesRelatedItem#comment}

---

### CasesRelatedItemContentComment <a name="CasesRelatedItemContentComment" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_related_item.CasesRelatedItemContentComment;

CasesRelatedItemContentComment.builder()
//  .body(java.lang.String)
//  .contentType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment.property.body">body</a></code> | <code>java.lang.String</code> | Text in the body of a comment. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Type of the text in the comment. |

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

Text in the body of a comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#body CasesRelatedItem#body}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Type of the text in the comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#content_type CasesRelatedItem#content_type}

---

### CasesRelatedItemTags <a name="CasesRelatedItemTags" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_related_item.CasesRelatedItemTags;

CasesRelatedItemTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags.property.key">key</a></code> | <code>java.lang.String</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#key CasesRelatedItem#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#value CasesRelatedItem#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CasesRelatedItemContentCommentOutputReference <a name="CasesRelatedItemContentCommentOutputReference" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_related_item.CasesRelatedItemContentCommentOutputReference;

new CasesRelatedItemContentCommentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resetContentType">resetContentType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBody` <a name="resetBody" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resetBody"></a>

```java
public void resetBody()
```

##### `resetContentType` <a name="resetContentType" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resetContentType"></a>

```java
public void resetContentType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesRelatedItemContentComment getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a>

---


### CasesRelatedItemContentOutputReference <a name="CasesRelatedItemContentOutputReference" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_related_item.CasesRelatedItemContentOutputReference;

new CasesRelatedItemContentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.putComment">putComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.resetComment">resetComment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putComment` <a name="putComment" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.putComment"></a>

```java
public void putComment(CasesRelatedItemContentComment value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.putComment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.resetComment"></a>

```java
public void resetComment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.comment">comment</a></code> | <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference">CasesRelatedItemContentCommentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.commentInput">commentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.comment"></a>

```java
public CasesRelatedItemContentCommentOutputReference getComment();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference">CasesRelatedItemContentCommentOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.commentInput"></a>

```java
public IResolvable|CasesRelatedItemContentComment getCommentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesRelatedItemContent getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a>

---


### CasesRelatedItemTagsList <a name="CasesRelatedItemTagsList" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_related_item.CasesRelatedItemTagsList;

new CasesRelatedItemTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.get"></a>

```java
public CasesRelatedItemTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CasesRelatedItemTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>>

---


### CasesRelatedItemTagsOutputReference <a name="CasesRelatedItemTagsOutputReference" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_related_item.CasesRelatedItemTagsOutputReference;

new CasesRelatedItemTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesRelatedItemTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>

---



