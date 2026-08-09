# `casesLayout` Submodule <a name="`casesLayout` Submodule" id="@cdktn/provider-awscc.casesLayout"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CasesLayout <a name="CasesLayout" id="@cdktn/provider-awscc.casesLayout.CasesLayout"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cases_layout awscc_cases_layout}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayout;

CasesLayout.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .content(CasesLayoutContent)
    .name(java.lang.String)
//  .domainId(java.lang.String)
//  .tags(IResolvable|java.util.List<CasesLayoutTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent">CasesLayoutContent</a></code> | Defines the layout structure and field organization for the case interface. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A descriptive name for the layout. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.domainId">domainId</a></code> | <code>java.lang.String</code> | The unique identifier of the Cases domain. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>></code> | The tags that you attach to this layout. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.content"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent">CasesLayoutContent</a>

Defines the layout structure and field organization for the case interface.

Specifies which fields appear in the top panel and More Info tab, and their display order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cases_layout#content CasesLayout#content}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A descriptive name for the layout.

Must be unique within the Cases domain and should clearly indicate the layout's purpose and field organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cases_layout#name CasesLayout#name}

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.domainId"></a>

- *Type:* java.lang.String

The unique identifier of the Cases domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cases_layout#domain_id CasesLayout#domain_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>>

The tags that you attach to this layout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cases_layout#tags CasesLayout#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.putContent">putContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.resetDomainId">resetDomainId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayout.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.casesLayout.CasesLayout.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.casesLayout.CasesLayout.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.casesLayout.CasesLayout.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.casesLayout.CasesLayout.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayout.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.casesLayout.CasesLayout.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.casesLayout.CasesLayout.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.casesLayout.CasesLayout.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.casesLayout.CasesLayout.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.casesLayout.CasesLayout.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.casesLayout.CasesLayout.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.casesLayout.CasesLayout.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesLayout.CasesLayout.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContent` <a name="putContent" id="@cdktn/provider-awscc.casesLayout.CasesLayout.putContent"></a>

```java
public void putContent(CasesLayoutContent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayout.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent">CasesLayoutContent</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.casesLayout.CasesLayout.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CasesLayoutTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayout.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>>

---

##### `resetDomainId` <a name="resetDomainId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.resetDomainId"></a>

```java
public void resetDomainId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.casesLayout.CasesLayout.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CasesLayout resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.casesLayout.CasesLayout.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayout;

CasesLayout.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesLayout.CasesLayout.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.casesLayout.CasesLayout.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayout;

CasesLayout.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesLayout.CasesLayout.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayout.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayout;

CasesLayout.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesLayout.CasesLayout.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.casesLayout.CasesLayout.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayout;

CasesLayout.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CasesLayout.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CasesLayout resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.casesLayout.CasesLayout.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CasesLayout to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CasesLayout that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cases_layout#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesLayout.CasesLayout.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CasesLayout to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference">CasesLayoutContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.layoutArn">layoutArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.layoutId">layoutId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList">CasesLayoutTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.contentInput">contentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent">CasesLayoutContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.domainIdInput">domainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.content"></a>

```java
public CasesLayoutContentOutputReference getContent();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference">CasesLayoutContentOutputReference</a>

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.lastModifiedTime"></a>

```java
public java.lang.String getLastModifiedTime();
```

- *Type:* java.lang.String

---

##### `layoutArn`<sup>Required</sup> <a name="layoutArn" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.layoutArn"></a>

```java
public java.lang.String getLayoutArn();
```

- *Type:* java.lang.String

---

##### `layoutId`<sup>Required</sup> <a name="layoutId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.layoutId"></a>

```java
public java.lang.String getLayoutId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.tags"></a>

```java
public CasesLayoutTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList">CasesLayoutTagsList</a>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.contentInput"></a>

```java
public IResolvable|CasesLayoutContent getContentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent">CasesLayoutContent</a>

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.domainIdInput"></a>

```java
public java.lang.String getDomainIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CasesLayoutTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CasesLayoutConfig <a name="CasesLayoutConfig" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutConfig;

CasesLayoutConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .content(CasesLayoutContent)
    .name(java.lang.String)
//  .domainId(java.lang.String)
//  .tags(IResolvable|java.util.List<CasesLayoutTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent">CasesLayoutContent</a></code> | Defines the layout structure and field organization for the case interface. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.name">name</a></code> | <code>java.lang.String</code> | A descriptive name for the layout. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.domainId">domainId</a></code> | <code>java.lang.String</code> | The unique identifier of the Cases domain. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>></code> | The tags that you attach to this layout. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.content"></a>

```java
public CasesLayoutContent getContent();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent">CasesLayoutContent</a>

Defines the layout structure and field organization for the case interface.

Specifies which fields appear in the top panel and More Info tab, and their display order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cases_layout#content CasesLayout#content}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A descriptive name for the layout.

Must be unique within the Cases domain and should clearly indicate the layout's purpose and field organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cases_layout#name CasesLayout#name}

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

The unique identifier of the Cases domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cases_layout#domain_id CasesLayout#domain_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CasesLayoutTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>>

The tags that you attach to this layout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cases_layout#tags CasesLayout#tags}

---

### CasesLayoutContent <a name="CasesLayoutContent" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContent.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutContent;

CasesLayoutContent.builder()
//  .basic(CasesLayoutContentBasic)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent.property.basic">basic</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic">CasesLayoutContentBasic</a></code> | Defines the field layout for the agent's case interface. |

---

##### `basic`<sup>Optional</sup> <a name="basic" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContent.property.basic"></a>

```java
public CasesLayoutContentBasic getBasic();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic">CasesLayoutContentBasic</a>

Defines the field layout for the agent's case interface.

Configures which fields appear in the top panel (immediately visible) and More Info tab (expandable section) of the case view, allowing customization of the agent experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cases_layout#basic CasesLayout#basic}

---

### CasesLayoutContentBasic <a name="CasesLayoutContentBasic" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutContentBasic;

CasesLayoutContentBasic.builder()
//  .moreInfo(CasesLayoutContentBasicMoreInfo)
//  .topPanel(CasesLayoutContentBasicTopPanel)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic.property.moreInfo">moreInfo</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo">CasesLayoutContentBasicMoreInfo</a></code> | Sections within a panel or tab of the page layout. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic.property.topPanel">topPanel</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel">CasesLayoutContentBasicTopPanel</a></code> | Sections within a panel or tab of the page layout. |

---

##### `moreInfo`<sup>Optional</sup> <a name="moreInfo" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic.property.moreInfo"></a>

```java
public CasesLayoutContentBasicMoreInfo getMoreInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo">CasesLayoutContentBasicMoreInfo</a>

Sections within a panel or tab of the page layout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cases_layout#more_info CasesLayout#more_info}

---

##### `topPanel`<sup>Optional</sup> <a name="topPanel" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic.property.topPanel"></a>

```java
public CasesLayoutContentBasicTopPanel getTopPanel();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel">CasesLayoutContentBasicTopPanel</a>

Sections within a panel or tab of the page layout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cases_layout#top_panel CasesLayout#top_panel}

---

### CasesLayoutContentBasicMoreInfo <a name="CasesLayoutContentBasicMoreInfo" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutContentBasicMoreInfo;

CasesLayoutContentBasicMoreInfo.builder()
//  .sections(IResolvable|java.util.List<CasesLayoutContentBasicMoreInfoSections>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo.property.sections">sections</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a>></code> | Defines the sections within a panel or tab. Contains field groups that organize related fields together. |

---

##### `sections`<sup>Optional</sup> <a name="sections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo.property.sections"></a>

```java
public IResolvable|java.util.List<CasesLayoutContentBasicMoreInfoSections> getSections();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a>>

Defines the sections within a panel or tab. Contains field groups that organize related fields together.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cases_layout#sections CasesLayout#sections}

---

### CasesLayoutContentBasicMoreInfoSections <a name="CasesLayoutContentBasicMoreInfoSections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutContentBasicMoreInfoSections;

CasesLayoutContentBasicMoreInfoSections.builder()
//  .fieldGroup(CasesLayoutContentBasicMoreInfoSectionsFieldGroup)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections.property.fieldGroup">fieldGroup</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup">CasesLayoutContentBasicMoreInfoSectionsFieldGroup</a></code> | Consists of a group of fields and associated properties. |

---

##### `fieldGroup`<sup>Optional</sup> <a name="fieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections.property.fieldGroup"></a>

```java
public CasesLayoutContentBasicMoreInfoSectionsFieldGroup getFieldGroup();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup">CasesLayoutContentBasicMoreInfoSectionsFieldGroup</a>

Consists of a group of fields and associated properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cases_layout#field_group CasesLayout#field_group}

---

### CasesLayoutContentBasicMoreInfoSectionsFieldGroup <a name="CasesLayoutContentBasicMoreInfoSectionsFieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup;

CasesLayoutContentBasicMoreInfoSectionsFieldGroup.builder()
//  .fields(IResolvable|java.util.List<CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields>)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup.property.fields">fields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a>></code> | An ordered list of fields to display in this group. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup.property.name">name</a></code> | <code>java.lang.String</code> | A descriptive name for the field group. Helps organize related fields together in the layout interface. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup.property.fields"></a>

```java
public IResolvable|java.util.List<CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields> getFields();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a>>

An ordered list of fields to display in this group.

The order determines the sequence in which fields appear in the agent interface. Each field is referenced by its unique field ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cases_layout#fields CasesLayout#fields}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A descriptive name for the field group. Helps organize related fields together in the layout interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cases_layout#name CasesLayout#name}

---

### CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields <a name="CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields;

CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields.builder()
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields.property.id">id</a></code> | <code>java.lang.String</code> | The unique identifier of a field. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The unique identifier of a field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cases_layout#id CasesLayout#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CasesLayoutContentBasicTopPanel <a name="CasesLayoutContentBasicTopPanel" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutContentBasicTopPanel;

CasesLayoutContentBasicTopPanel.builder()
//  .sections(IResolvable|java.util.List<CasesLayoutContentBasicTopPanelSections>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel.property.sections">sections</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a>></code> | Defines the sections within a panel or tab. Contains field groups that organize related fields together. |

---

##### `sections`<sup>Optional</sup> <a name="sections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel.property.sections"></a>

```java
public IResolvable|java.util.List<CasesLayoutContentBasicTopPanelSections> getSections();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a>>

Defines the sections within a panel or tab. Contains field groups that organize related fields together.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cases_layout#sections CasesLayout#sections}

---

### CasesLayoutContentBasicTopPanelSections <a name="CasesLayoutContentBasicTopPanelSections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutContentBasicTopPanelSections;

CasesLayoutContentBasicTopPanelSections.builder()
//  .fieldGroup(CasesLayoutContentBasicTopPanelSectionsFieldGroup)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections.property.fieldGroup">fieldGroup</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup">CasesLayoutContentBasicTopPanelSectionsFieldGroup</a></code> | Consists of a group of fields and associated properties. |

---

##### `fieldGroup`<sup>Optional</sup> <a name="fieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections.property.fieldGroup"></a>

```java
public CasesLayoutContentBasicTopPanelSectionsFieldGroup getFieldGroup();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup">CasesLayoutContentBasicTopPanelSectionsFieldGroup</a>

Consists of a group of fields and associated properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cases_layout#field_group CasesLayout#field_group}

---

### CasesLayoutContentBasicTopPanelSectionsFieldGroup <a name="CasesLayoutContentBasicTopPanelSectionsFieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutContentBasicTopPanelSectionsFieldGroup;

CasesLayoutContentBasicTopPanelSectionsFieldGroup.builder()
//  .fields(IResolvable|java.util.List<CasesLayoutContentBasicTopPanelSectionsFieldGroupFields>)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup.property.fields">fields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a>></code> | An ordered list of fields to display in this group. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup.property.name">name</a></code> | <code>java.lang.String</code> | A descriptive name for the field group. Helps organize related fields together in the layout interface. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup.property.fields"></a>

```java
public IResolvable|java.util.List<CasesLayoutContentBasicTopPanelSectionsFieldGroupFields> getFields();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a>>

An ordered list of fields to display in this group.

The order determines the sequence in which fields appear in the agent interface. Each field is referenced by its unique field ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cases_layout#fields CasesLayout#fields}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A descriptive name for the field group. Helps organize related fields together in the layout interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cases_layout#name CasesLayout#name}

---

### CasesLayoutContentBasicTopPanelSectionsFieldGroupFields <a name="CasesLayoutContentBasicTopPanelSectionsFieldGroupFields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields;

CasesLayoutContentBasicTopPanelSectionsFieldGroupFields.builder()
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields.property.id">id</a></code> | <code>java.lang.String</code> | The unique identifier of a field. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The unique identifier of a field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cases_layout#id CasesLayout#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CasesLayoutTags <a name="CasesLayoutTags" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutTags;

CasesLayoutTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cases_layout#key CasesLayout#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cases_layout#value CasesLayout#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CasesLayoutContentBasicMoreInfoOutputReference <a name="CasesLayoutContentBasicMoreInfoOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutContentBasicMoreInfoOutputReference;

new CasesLayoutContentBasicMoreInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.putSections">putSections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.resetSections">resetSections</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSections` <a name="putSections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.putSections"></a>

```java
public void putSections(IResolvable|java.util.List<CasesLayoutContentBasicMoreInfoSections> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.putSections.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a>>

---

##### `resetSections` <a name="resetSections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.resetSections"></a>

```java
public void resetSections()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.sections">sections</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList">CasesLayoutContentBasicMoreInfoSectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.sectionsInput">sectionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo">CasesLayoutContentBasicMoreInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sections`<sup>Required</sup> <a name="sections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.sections"></a>

```java
public CasesLayoutContentBasicMoreInfoSectionsList getSections();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList">CasesLayoutContentBasicMoreInfoSectionsList</a>

---

##### `sectionsInput`<sup>Optional</sup> <a name="sectionsInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.sectionsInput"></a>

```java
public IResolvable|java.util.List<CasesLayoutContentBasicMoreInfoSections> getSectionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesLayoutContentBasicMoreInfo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo">CasesLayoutContentBasicMoreInfo</a>

---


### CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList <a name="CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList;

new CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.get"></a>

```java
public CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a>>

---


### CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference <a name="CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference;

new CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.resetId"></a>

```java
public void resetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a>

---


### CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference <a name="CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference;

new CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.putFields"></a>

```java
public void putFields(IResolvable|java.util.List<CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.putFields.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a>>

---

##### `resetFields` <a name="resetFields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resetFields"></a>

```java
public void resetFields()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup">CasesLayoutContentBasicMoreInfoSectionsFieldGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fields"></a>

```java
public CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList getFields();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList</a>

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fieldsInput"></a>

```java
public IResolvable|java.util.List<CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields> getFieldsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesLayoutContentBasicMoreInfoSectionsFieldGroup getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup">CasesLayoutContentBasicMoreInfoSectionsFieldGroup</a>

---


### CasesLayoutContentBasicMoreInfoSectionsList <a name="CasesLayoutContentBasicMoreInfoSectionsList" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutContentBasicMoreInfoSectionsList;

new CasesLayoutContentBasicMoreInfoSectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.get"></a>

```java
public CasesLayoutContentBasicMoreInfoSectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CasesLayoutContentBasicMoreInfoSections> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a>>

---


### CasesLayoutContentBasicMoreInfoSectionsOutputReference <a name="CasesLayoutContentBasicMoreInfoSectionsOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutContentBasicMoreInfoSectionsOutputReference;

new CasesLayoutContentBasicMoreInfoSectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.putFieldGroup">putFieldGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.resetFieldGroup">resetFieldGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldGroup` <a name="putFieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.putFieldGroup"></a>

```java
public void putFieldGroup(CasesLayoutContentBasicMoreInfoSectionsFieldGroup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.putFieldGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup">CasesLayoutContentBasicMoreInfoSectionsFieldGroup</a>

---

##### `resetFieldGroup` <a name="resetFieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.resetFieldGroup"></a>

```java
public void resetFieldGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fieldGroup">fieldGroup</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference">CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fieldGroupInput">fieldGroupInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup">CasesLayoutContentBasicMoreInfoSectionsFieldGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldGroup`<sup>Required</sup> <a name="fieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fieldGroup"></a>

```java
public CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference getFieldGroup();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference">CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference</a>

---

##### `fieldGroupInput`<sup>Optional</sup> <a name="fieldGroupInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fieldGroupInput"></a>

```java
public IResolvable|CasesLayoutContentBasicMoreInfoSectionsFieldGroup getFieldGroupInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup">CasesLayoutContentBasicMoreInfoSectionsFieldGroup</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesLayoutContentBasicMoreInfoSections getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a>

---


### CasesLayoutContentBasicOutputReference <a name="CasesLayoutContentBasicOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutContentBasicOutputReference;

new CasesLayoutContentBasicOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.putMoreInfo">putMoreInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.putTopPanel">putTopPanel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resetMoreInfo">resetMoreInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resetTopPanel">resetTopPanel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMoreInfo` <a name="putMoreInfo" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.putMoreInfo"></a>

```java
public void putMoreInfo(CasesLayoutContentBasicMoreInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.putMoreInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo">CasesLayoutContentBasicMoreInfo</a>

---

##### `putTopPanel` <a name="putTopPanel" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.putTopPanel"></a>

```java
public void putTopPanel(CasesLayoutContentBasicTopPanel value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.putTopPanel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel">CasesLayoutContentBasicTopPanel</a>

---

##### `resetMoreInfo` <a name="resetMoreInfo" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resetMoreInfo"></a>

```java
public void resetMoreInfo()
```

##### `resetTopPanel` <a name="resetTopPanel" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resetTopPanel"></a>

```java
public void resetTopPanel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.moreInfo">moreInfo</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference">CasesLayoutContentBasicMoreInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.topPanel">topPanel</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference">CasesLayoutContentBasicTopPanelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.moreInfoInput">moreInfoInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo">CasesLayoutContentBasicMoreInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.topPanelInput">topPanelInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel">CasesLayoutContentBasicTopPanel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic">CasesLayoutContentBasic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `moreInfo`<sup>Required</sup> <a name="moreInfo" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.moreInfo"></a>

```java
public CasesLayoutContentBasicMoreInfoOutputReference getMoreInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference">CasesLayoutContentBasicMoreInfoOutputReference</a>

---

##### `topPanel`<sup>Required</sup> <a name="topPanel" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.topPanel"></a>

```java
public CasesLayoutContentBasicTopPanelOutputReference getTopPanel();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference">CasesLayoutContentBasicTopPanelOutputReference</a>

---

##### `moreInfoInput`<sup>Optional</sup> <a name="moreInfoInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.moreInfoInput"></a>

```java
public IResolvable|CasesLayoutContentBasicMoreInfo getMoreInfoInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo">CasesLayoutContentBasicMoreInfo</a>

---

##### `topPanelInput`<sup>Optional</sup> <a name="topPanelInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.topPanelInput"></a>

```java
public IResolvable|CasesLayoutContentBasicTopPanel getTopPanelInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel">CasesLayoutContentBasicTopPanel</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesLayoutContentBasic getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic">CasesLayoutContentBasic</a>

---


### CasesLayoutContentBasicTopPanelOutputReference <a name="CasesLayoutContentBasicTopPanelOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutContentBasicTopPanelOutputReference;

new CasesLayoutContentBasicTopPanelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.putSections">putSections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.resetSections">resetSections</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSections` <a name="putSections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.putSections"></a>

```java
public void putSections(IResolvable|java.util.List<CasesLayoutContentBasicTopPanelSections> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.putSections.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a>>

---

##### `resetSections` <a name="resetSections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.resetSections"></a>

```java
public void resetSections()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.sections">sections</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList">CasesLayoutContentBasicTopPanelSectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.sectionsInput">sectionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel">CasesLayoutContentBasicTopPanel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sections`<sup>Required</sup> <a name="sections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.sections"></a>

```java
public CasesLayoutContentBasicTopPanelSectionsList getSections();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList">CasesLayoutContentBasicTopPanelSectionsList</a>

---

##### `sectionsInput`<sup>Optional</sup> <a name="sectionsInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.sectionsInput"></a>

```java
public IResolvable|java.util.List<CasesLayoutContentBasicTopPanelSections> getSectionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesLayoutContentBasicTopPanel getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel">CasesLayoutContentBasicTopPanel</a>

---


### CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList <a name="CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList;

new CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.get"></a>

```java
public CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CasesLayoutContentBasicTopPanelSectionsFieldGroupFields> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a>>

---


### CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference <a name="CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference;

new CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.resetId"></a>

```java
public void resetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesLayoutContentBasicTopPanelSectionsFieldGroupFields getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a>

---


### CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference <a name="CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference;

new CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.putFields"></a>

```java
public void putFields(IResolvable|java.util.List<CasesLayoutContentBasicTopPanelSectionsFieldGroupFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.putFields.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a>>

---

##### `resetFields` <a name="resetFields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resetFields"></a>

```java
public void resetFields()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList">CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup">CasesLayoutContentBasicTopPanelSectionsFieldGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fields"></a>

```java
public CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList getFields();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList">CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList</a>

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fieldsInput"></a>

```java
public IResolvable|java.util.List<CasesLayoutContentBasicTopPanelSectionsFieldGroupFields> getFieldsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesLayoutContentBasicTopPanelSectionsFieldGroup getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup">CasesLayoutContentBasicTopPanelSectionsFieldGroup</a>

---


### CasesLayoutContentBasicTopPanelSectionsList <a name="CasesLayoutContentBasicTopPanelSectionsList" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutContentBasicTopPanelSectionsList;

new CasesLayoutContentBasicTopPanelSectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.get"></a>

```java
public CasesLayoutContentBasicTopPanelSectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CasesLayoutContentBasicTopPanelSections> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a>>

---


### CasesLayoutContentBasicTopPanelSectionsOutputReference <a name="CasesLayoutContentBasicTopPanelSectionsOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutContentBasicTopPanelSectionsOutputReference;

new CasesLayoutContentBasicTopPanelSectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.putFieldGroup">putFieldGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.resetFieldGroup">resetFieldGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldGroup` <a name="putFieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.putFieldGroup"></a>

```java
public void putFieldGroup(CasesLayoutContentBasicTopPanelSectionsFieldGroup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.putFieldGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup">CasesLayoutContentBasicTopPanelSectionsFieldGroup</a>

---

##### `resetFieldGroup` <a name="resetFieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.resetFieldGroup"></a>

```java
public void resetFieldGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.fieldGroup">fieldGroup</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference">CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.fieldGroupInput">fieldGroupInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup">CasesLayoutContentBasicTopPanelSectionsFieldGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldGroup`<sup>Required</sup> <a name="fieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.fieldGroup"></a>

```java
public CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference getFieldGroup();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference">CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference</a>

---

##### `fieldGroupInput`<sup>Optional</sup> <a name="fieldGroupInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.fieldGroupInput"></a>

```java
public IResolvable|CasesLayoutContentBasicTopPanelSectionsFieldGroup getFieldGroupInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup">CasesLayoutContentBasicTopPanelSectionsFieldGroup</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesLayoutContentBasicTopPanelSections getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a>

---


### CasesLayoutContentOutputReference <a name="CasesLayoutContentOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutContentOutputReference;

new CasesLayoutContentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.putBasic">putBasic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.resetBasic">resetBasic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasic` <a name="putBasic" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.putBasic"></a>

```java
public void putBasic(CasesLayoutContentBasic value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.putBasic.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic">CasesLayoutContentBasic</a>

---

##### `resetBasic` <a name="resetBasic" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.resetBasic"></a>

```java
public void resetBasic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.basic">basic</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference">CasesLayoutContentBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.basicInput">basicInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic">CasesLayoutContentBasic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent">CasesLayoutContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `basic`<sup>Required</sup> <a name="basic" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.basic"></a>

```java
public CasesLayoutContentBasicOutputReference getBasic();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference">CasesLayoutContentBasicOutputReference</a>

---

##### `basicInput`<sup>Optional</sup> <a name="basicInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.basicInput"></a>

```java
public IResolvable|CasesLayoutContentBasic getBasicInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic">CasesLayoutContentBasic</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesLayoutContent getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent">CasesLayoutContent</a>

---


### CasesLayoutTagsList <a name="CasesLayoutTagsList" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutTagsList;

new CasesLayoutTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.get"></a>

```java
public CasesLayoutTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CasesLayoutTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>>

---


### CasesLayoutTagsOutputReference <a name="CasesLayoutTagsOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_layout.CasesLayoutTagsOutputReference;

new CasesLayoutTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesLayoutTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>

---



