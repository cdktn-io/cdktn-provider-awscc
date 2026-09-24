# `kendraFeaturedResultsSet` Submodule <a name="`kendraFeaturedResultsSet` Submodule" id="@cdktn/provider-awscc.kendraFeaturedResultsSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KendraFeaturedResultsSet <a name="KendraFeaturedResultsSet" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set awscc_kendra_featured_results_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer"></a>

```java
import io.cdktn.providers.awscc.kendra_featured_results_set.KendraFeaturedResultsSet;

KendraFeaturedResultsSet.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .featuredResultsSetName(java.lang.String)
    .indexId(java.lang.String)
//  .description(java.lang.String)
//  .featuredDocuments(IResolvable|java.util.List<KendraFeaturedResultsSetFeaturedDocuments>)
//  .queryTexts(java.util.List<java.lang.String>)
//  .status(java.lang.String)
//  .tags(IResolvable|java.util.List<KendraFeaturedResultsSetTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.featuredResultsSetName">featuredResultsSetName</a></code> | <code>java.lang.String</code> | A name for the set of featured results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.indexId">indexId</a></code> | <code>java.lang.String</code> | The identifier of the index that you want to use for featuring results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description for the set of featured results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.featuredDocuments">featuredDocuments</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>></code> | A list of document IDs for the documents you want to feature at the top of the search results page. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.queryTexts">queryTexts</a></code> | <code>java.util.List<java.lang.String></code> | A list of queries for featuring results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | The current status of the set of featured results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>></code> | A list of key-value pairs that identify or categorize the featured results set. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `featuredResultsSetName`<sup>Required</sup> <a name="featuredResultsSetName" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.featuredResultsSetName"></a>

- *Type:* java.lang.String

A name for the set of featured results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#featured_results_set_name KendraFeaturedResultsSet#featured_results_set_name}

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.indexId"></a>

- *Type:* java.lang.String

The identifier of the index that you want to use for featuring results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#index_id KendraFeaturedResultsSet#index_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description for the set of featured results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#description KendraFeaturedResultsSet#description}

---

##### `featuredDocuments`<sup>Optional</sup> <a name="featuredDocuments" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.featuredDocuments"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>>

A list of document IDs for the documents you want to feature at the top of the search results page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#featured_documents KendraFeaturedResultsSet#featured_documents}

---

##### `queryTexts`<sup>Optional</sup> <a name="queryTexts" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.queryTexts"></a>

- *Type:* java.util.List<java.lang.String>

A list of queries for featuring results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#query_texts KendraFeaturedResultsSet#query_texts}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.status"></a>

- *Type:* java.lang.String

The current status of the set of featured results.

When the value is ACTIVE, featured results are ready for use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#status KendraFeaturedResultsSet#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>>

A list of key-value pairs that identify or categorize the featured results set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#tags KendraFeaturedResultsSet#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putFeaturedDocuments">putFeaturedDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetFeaturedDocuments">resetFeaturedDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetQueryTexts">resetQueryTexts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFeaturedDocuments` <a name="putFeaturedDocuments" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putFeaturedDocuments"></a>

```java
public void putFeaturedDocuments(IResolvable|java.util.List<KendraFeaturedResultsSetFeaturedDocuments> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putFeaturedDocuments.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<KendraFeaturedResultsSetTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFeaturedDocuments` <a name="resetFeaturedDocuments" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetFeaturedDocuments"></a>

```java
public void resetFeaturedDocuments()
```

##### `resetQueryTexts` <a name="resetQueryTexts" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetQueryTexts"></a>

```java
public void resetQueryTexts()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KendraFeaturedResultsSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isConstruct"></a>

```java
import io.cdktn.providers.awscc.kendra_featured_results_set.KendraFeaturedResultsSet;

KendraFeaturedResultsSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.kendra_featured_results_set.KendraFeaturedResultsSet;

KendraFeaturedResultsSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.kendra_featured_results_set.KendraFeaturedResultsSet;

KendraFeaturedResultsSet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.kendra_featured_results_set.KendraFeaturedResultsSet;

KendraFeaturedResultsSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KendraFeaturedResultsSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a KendraFeaturedResultsSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KendraFeaturedResultsSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KendraFeaturedResultsSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the KendraFeaturedResultsSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredDocuments">featuredDocuments</a></code> | <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList">KendraFeaturedResultsSetFeaturedDocumentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetId">featuredResultsSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList">KendraFeaturedResultsSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredDocumentsInput">featuredDocumentsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetNameInput">featuredResultsSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.indexIdInput">indexIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.queryTextsInput">queryTextsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetName">featuredResultsSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.indexId">indexId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.queryTexts">queryTexts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `featuredDocuments`<sup>Required</sup> <a name="featuredDocuments" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredDocuments"></a>

```java
public KendraFeaturedResultsSetFeaturedDocumentsList getFeaturedDocuments();
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList">KendraFeaturedResultsSetFeaturedDocumentsList</a>

---

##### `featuredResultsSetId`<sup>Required</sup> <a name="featuredResultsSetId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetId"></a>

```java
public java.lang.String getFeaturedResultsSetId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tags"></a>

```java
public KendraFeaturedResultsSetTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList">KendraFeaturedResultsSetTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `featuredDocumentsInput`<sup>Optional</sup> <a name="featuredDocumentsInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredDocumentsInput"></a>

```java
public IResolvable|java.util.List<KendraFeaturedResultsSetFeaturedDocuments> getFeaturedDocumentsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>>

---

##### `featuredResultsSetNameInput`<sup>Optional</sup> <a name="featuredResultsSetNameInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetNameInput"></a>

```java
public java.lang.String getFeaturedResultsSetNameInput();
```

- *Type:* java.lang.String

---

##### `indexIdInput`<sup>Optional</sup> <a name="indexIdInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.indexIdInput"></a>

```java
public java.lang.String getIndexIdInput();
```

- *Type:* java.lang.String

---

##### `queryTextsInput`<sup>Optional</sup> <a name="queryTextsInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.queryTextsInput"></a>

```java
public java.util.List<java.lang.String> getQueryTextsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tagsInput"></a>

```java
public IResolvable|java.util.List<KendraFeaturedResultsSetTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `featuredResultsSetName`<sup>Required</sup> <a name="featuredResultsSetName" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetName"></a>

```java
public java.lang.String getFeaturedResultsSetName();
```

- *Type:* java.lang.String

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.indexId"></a>

```java
public java.lang.String getIndexId();
```

- *Type:* java.lang.String

---

##### `queryTexts`<sup>Required</sup> <a name="queryTexts" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.queryTexts"></a>

```java
public java.util.List<java.lang.String> getQueryTexts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KendraFeaturedResultsSetConfig <a name="KendraFeaturedResultsSetConfig" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.kendra_featured_results_set.KendraFeaturedResultsSetConfig;

KendraFeaturedResultsSetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .featuredResultsSetName(java.lang.String)
    .indexId(java.lang.String)
//  .description(java.lang.String)
//  .featuredDocuments(IResolvable|java.util.List<KendraFeaturedResultsSetFeaturedDocuments>)
//  .queryTexts(java.util.List<java.lang.String>)
//  .status(java.lang.String)
//  .tags(IResolvable|java.util.List<KendraFeaturedResultsSetTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.featuredResultsSetName">featuredResultsSetName</a></code> | <code>java.lang.String</code> | A name for the set of featured results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.indexId">indexId</a></code> | <code>java.lang.String</code> | The identifier of the index that you want to use for featuring results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description for the set of featured results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.featuredDocuments">featuredDocuments</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>></code> | A list of document IDs for the documents you want to feature at the top of the search results page. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.queryTexts">queryTexts</a></code> | <code>java.util.List<java.lang.String></code> | A list of queries for featuring results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.status">status</a></code> | <code>java.lang.String</code> | The current status of the set of featured results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>></code> | A list of key-value pairs that identify or categorize the featured results set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `featuredResultsSetName`<sup>Required</sup> <a name="featuredResultsSetName" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.featuredResultsSetName"></a>

```java
public java.lang.String getFeaturedResultsSetName();
```

- *Type:* java.lang.String

A name for the set of featured results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#featured_results_set_name KendraFeaturedResultsSet#featured_results_set_name}

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.indexId"></a>

```java
public java.lang.String getIndexId();
```

- *Type:* java.lang.String

The identifier of the index that you want to use for featuring results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#index_id KendraFeaturedResultsSet#index_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description for the set of featured results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#description KendraFeaturedResultsSet#description}

---

##### `featuredDocuments`<sup>Optional</sup> <a name="featuredDocuments" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.featuredDocuments"></a>

```java
public IResolvable|java.util.List<KendraFeaturedResultsSetFeaturedDocuments> getFeaturedDocuments();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>>

A list of document IDs for the documents you want to feature at the top of the search results page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#featured_documents KendraFeaturedResultsSet#featured_documents}

---

##### `queryTexts`<sup>Optional</sup> <a name="queryTexts" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.queryTexts"></a>

```java
public java.util.List<java.lang.String> getQueryTexts();
```

- *Type:* java.util.List<java.lang.String>

A list of queries for featuring results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#query_texts KendraFeaturedResultsSet#query_texts}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

The current status of the set of featured results.

When the value is ACTIVE, featured results are ready for use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#status KendraFeaturedResultsSet#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.tags"></a>

```java
public IResolvable|java.util.List<KendraFeaturedResultsSetTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>>

A list of key-value pairs that identify or categorize the featured results set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#tags KendraFeaturedResultsSet#tags}

---

### KendraFeaturedResultsSetFeaturedDocuments <a name="KendraFeaturedResultsSetFeaturedDocuments" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments.Initializer"></a>

```java
import io.cdktn.providers.awscc.kendra_featured_results_set.KendraFeaturedResultsSetFeaturedDocuments;

KendraFeaturedResultsSetFeaturedDocuments.builder()
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments.property.id">id</a></code> | <code>java.lang.String</code> | The identifier of the document to feature in the search results. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The identifier of the document to feature in the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#id KendraFeaturedResultsSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### KendraFeaturedResultsSetTags <a name="KendraFeaturedResultsSetTags" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.kendra_featured_results_set.KendraFeaturedResultsSetTags;

KendraFeaturedResultsSetTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags.property.key">key</a></code> | <code>java.lang.String</code> | The key for the tag. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags.property.value">value</a></code> | <code>java.lang.String</code> | The value associated with the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#key KendraFeaturedResultsSet#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value associated with the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#value KendraFeaturedResultsSet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KendraFeaturedResultsSetFeaturedDocumentsList <a name="KendraFeaturedResultsSetFeaturedDocumentsList" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.kendra_featured_results_set.KendraFeaturedResultsSetFeaturedDocumentsList;

new KendraFeaturedResultsSetFeaturedDocumentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.get"></a>

```java
public KendraFeaturedResultsSetFeaturedDocumentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<KendraFeaturedResultsSetFeaturedDocuments> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>>

---


### KendraFeaturedResultsSetFeaturedDocumentsOutputReference <a name="KendraFeaturedResultsSetFeaturedDocumentsOutputReference" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kendra_featured_results_set.KendraFeaturedResultsSetFeaturedDocumentsOutputReference;

new KendraFeaturedResultsSetFeaturedDocumentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.resetId"></a>

```java
public void resetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.internalValue"></a>

```java
public IResolvable|KendraFeaturedResultsSetFeaturedDocuments getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>

---


### KendraFeaturedResultsSetTagsList <a name="KendraFeaturedResultsSetTagsList" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.kendra_featured_results_set.KendraFeaturedResultsSetTagsList;

new KendraFeaturedResultsSetTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.get"></a>

```java
public KendraFeaturedResultsSetTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<KendraFeaturedResultsSetTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>>

---


### KendraFeaturedResultsSetTagsOutputReference <a name="KendraFeaturedResultsSetTagsOutputReference" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kendra_featured_results_set.KendraFeaturedResultsSetTagsOutputReference;

new KendraFeaturedResultsSetTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|KendraFeaturedResultsSetTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>

---



