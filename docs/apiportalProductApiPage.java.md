# `apiportalProductApiPage` Submodule <a name="`apiportalProductApiPage` Submodule" id="@cdktn/provider-awscc.apiportalProductApiPage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiportalProductApiPage <a name="ApiportalProductApiPage" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page awscc_apiportal_product_api_page}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_api_page.ApiportalProductApiPage;

ApiportalProductApiPage.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .productId(java.lang.String)
//  .displayContent(ApiportalProductApiPageDisplayContent)
//  .managedApiId(java.lang.String)
//  .tags(IResolvable|java.util.List<ApiportalProductApiPageTags>)
//  .tryItState(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.productId">productId</a></code> | <code>java.lang.String</code> | The identifier of the parent Product. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.displayContent">displayContent</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent">ApiportalProductApiPageDisplayContent</a></code> | Three-mode content: write with either Overrides or None; the service populates ApiUrl, OperationName and Body on Read. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.managedApiId">managedApiId</a></code> | <code>java.lang.String</code> | Identifier of the Managed API this page documents. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>></code> | The tags associated with the product API page. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.tryItState">tryItState</a></code> | <code>java.lang.String</code> | Whether the interactive TryIt UI is enabled for this API. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.productId"></a>

- *Type:* java.lang.String

The identifier of the parent Product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#product_id ApiportalProductApiPage#product_id}

---

##### `displayContent`<sup>Optional</sup> <a name="displayContent" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.displayContent"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent">ApiportalProductApiPageDisplayContent</a>

Three-mode content: write with either Overrides or None; the service populates ApiUrl, OperationName and Body on Read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#display_content ApiportalProductApiPage#display_content}

---

##### `managedApiId`<sup>Optional</sup> <a name="managedApiId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.managedApiId"></a>

- *Type:* java.lang.String

Identifier of the Managed API this page documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#managed_api_id ApiportalProductApiPage#managed_api_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>>

The tags associated with the product API page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#tags ApiportalProductApiPage#tags}

---

##### `tryItState`<sup>Optional</sup> <a name="tryItState" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.tryItState"></a>

- *Type:* java.lang.String

Whether the interactive TryIt UI is enabled for this API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#try_it_state ApiportalProductApiPage#try_it_state}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.putDisplayContent">putDisplayContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetDisplayContent">resetDisplayContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetManagedApiId">resetManagedApiId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetTryItState">resetTryItState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDisplayContent` <a name="putDisplayContent" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.putDisplayContent"></a>

```java
public void putDisplayContent(ApiportalProductApiPageDisplayContent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.putDisplayContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent">ApiportalProductApiPageDisplayContent</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ApiportalProductApiPageTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>>

---

##### `resetDisplayContent` <a name="resetDisplayContent" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetDisplayContent"></a>

```java
public void resetDisplayContent()
```

##### `resetManagedApiId` <a name="resetManagedApiId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetManagedApiId"></a>

```java
public void resetManagedApiId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetTags"></a>

```java
public void resetTags()
```

##### `resetTryItState` <a name="resetTryItState" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetTryItState"></a>

```java
public void resetTryItState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApiportalProductApiPage resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isConstruct"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_api_page.ApiportalProductApiPage;

ApiportalProductApiPage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_api_page.ApiportalProductApiPage;

ApiportalProductApiPage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_api_page.ApiportalProductApiPage;

ApiportalProductApiPage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_api_page.ApiportalProductApiPage;

ApiportalProductApiPage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApiportalProductApiPage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApiportalProductApiPage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApiportalProductApiPage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApiportalProductApiPage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApiportalProductApiPage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.apiId">apiId</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference">ApiportalProductApiPageApiIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.displayContent">displayContent</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference">ApiportalProductApiPageDisplayContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productApiPageArn">productApiPageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productApiPageId">productApiPageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.statusException">statusException</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference">ApiportalProductApiPageStatusExceptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList">ApiportalProductApiPageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.displayContentInput">displayContentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent">ApiportalProductApiPageDisplayContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.managedApiIdInput">managedApiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productIdInput">productIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tryItStateInput">tryItStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.managedApiId">managedApiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productId">productId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tryItState">tryItState</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.apiId"></a>

```java
public ApiportalProductApiPageApiIdOutputReference getApiId();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference">ApiportalProductApiPageApiIdOutputReference</a>

---

##### `displayContent`<sup>Required</sup> <a name="displayContent" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.displayContent"></a>

```java
public ApiportalProductApiPageDisplayContentOutputReference getDisplayContent();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference">ApiportalProductApiPageDisplayContentOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `productApiPageArn`<sup>Required</sup> <a name="productApiPageArn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productApiPageArn"></a>

```java
public java.lang.String getProductApiPageArn();
```

- *Type:* java.lang.String

---

##### `productApiPageId`<sup>Required</sup> <a name="productApiPageId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productApiPageId"></a>

```java
public java.lang.String getProductApiPageId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusException`<sup>Required</sup> <a name="statusException" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.statusException"></a>

```java
public ApiportalProductApiPageStatusExceptionOutputReference getStatusException();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference">ApiportalProductApiPageStatusExceptionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tags"></a>

```java
public ApiportalProductApiPageTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList">ApiportalProductApiPageTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `displayContentInput`<sup>Optional</sup> <a name="displayContentInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.displayContentInput"></a>

```java
public IResolvable|ApiportalProductApiPageDisplayContent getDisplayContentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent">ApiportalProductApiPageDisplayContent</a>

---

##### `managedApiIdInput`<sup>Optional</sup> <a name="managedApiIdInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.managedApiIdInput"></a>

```java
public java.lang.String getManagedApiIdInput();
```

- *Type:* java.lang.String

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productIdInput"></a>

```java
public java.lang.String getProductIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ApiportalProductApiPageTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>>

---

##### `tryItStateInput`<sup>Optional</sup> <a name="tryItStateInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tryItStateInput"></a>

```java
public java.lang.String getTryItStateInput();
```

- *Type:* java.lang.String

---

##### `managedApiId`<sup>Required</sup> <a name="managedApiId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.managedApiId"></a>

```java
public java.lang.String getManagedApiId();
```

- *Type:* java.lang.String

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productId"></a>

```java
public java.lang.String getProductId();
```

- *Type:* java.lang.String

---

##### `tryItState`<sup>Required</sup> <a name="tryItState" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tryItState"></a>

```java
public java.lang.String getTryItState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiportalProductApiPageApiId <a name="ApiportalProductApiPageApiId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiId.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_api_page.ApiportalProductApiPageApiId;

ApiportalProductApiPageApiId.builder()
    .build();
```


### ApiportalProductApiPageApiIdIdentifierParts <a name="ApiportalProductApiPageApiIdIdentifierParts" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierParts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierParts.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_api_page.ApiportalProductApiPageApiIdIdentifierParts;

ApiportalProductApiPageApiIdIdentifierParts.builder()
    .build();
```


### ApiportalProductApiPageConfig <a name="ApiportalProductApiPageConfig" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_api_page.ApiportalProductApiPageConfig;

ApiportalProductApiPageConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .productId(java.lang.String)
//  .displayContent(ApiportalProductApiPageDisplayContent)
//  .managedApiId(java.lang.String)
//  .tags(IResolvable|java.util.List<ApiportalProductApiPageTags>)
//  .tryItState(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.productId">productId</a></code> | <code>java.lang.String</code> | The identifier of the parent Product. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.displayContent">displayContent</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent">ApiportalProductApiPageDisplayContent</a></code> | Three-mode content: write with either Overrides or None; the service populates ApiUrl, OperationName and Body on Read. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.managedApiId">managedApiId</a></code> | <code>java.lang.String</code> | Identifier of the Managed API this page documents. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>></code> | The tags associated with the product API page. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.tryItState">tryItState</a></code> | <code>java.lang.String</code> | Whether the interactive TryIt UI is enabled for this API. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.productId"></a>

```java
public java.lang.String getProductId();
```

- *Type:* java.lang.String

The identifier of the parent Product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#product_id ApiportalProductApiPage#product_id}

---

##### `displayContent`<sup>Optional</sup> <a name="displayContent" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.displayContent"></a>

```java
public ApiportalProductApiPageDisplayContent getDisplayContent();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent">ApiportalProductApiPageDisplayContent</a>

Three-mode content: write with either Overrides or None; the service populates ApiUrl, OperationName and Body on Read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#display_content ApiportalProductApiPage#display_content}

---

##### `managedApiId`<sup>Optional</sup> <a name="managedApiId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.managedApiId"></a>

```java
public java.lang.String getManagedApiId();
```

- *Type:* java.lang.String

Identifier of the Managed API this page documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#managed_api_id ApiportalProductApiPage#managed_api_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ApiportalProductApiPageTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>>

The tags associated with the product API page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#tags ApiportalProductApiPage#tags}

---

##### `tryItState`<sup>Optional</sup> <a name="tryItState" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.tryItState"></a>

```java
public java.lang.String getTryItState();
```

- *Type:* java.lang.String

Whether the interactive TryIt UI is enabled for this API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#try_it_state ApiportalProductApiPage#try_it_state}

---

### ApiportalProductApiPageDisplayContent <a name="ApiportalProductApiPageDisplayContent" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_api_page.ApiportalProductApiPageDisplayContent;

ApiportalProductApiPageDisplayContent.builder()
//  .none(java.lang.String)
//  .overrides(ApiportalProductApiPageDisplayContentOverrides)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent.property.none">none</a></code> | <code>java.lang.String</code> | Marker selecting the default service-rendered content with no overrides. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides">ApiportalProductApiPageDisplayContentOverrides</a></code> | Customer-supplied overrides for the service-rendered API documentation. |

---

##### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent.property.none"></a>

```java
public java.lang.String getNone();
```

- *Type:* java.lang.String

Marker selecting the default service-rendered content with no overrides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#none ApiportalProductApiPage#none}

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent.property.overrides"></a>

```java
public ApiportalProductApiPageDisplayContentOverrides getOverrides();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides">ApiportalProductApiPageDisplayContentOverrides</a>

Customer-supplied overrides for the service-rendered API documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#overrides ApiportalProductApiPage#overrides}

---

### ApiportalProductApiPageDisplayContentOverrides <a name="ApiportalProductApiPageDisplayContentOverrides" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_api_page.ApiportalProductApiPageDisplayContentOverrides;

ApiportalProductApiPageDisplayContentOverrides.builder()
//  .apiUrl(java.lang.String)
//  .body(java.lang.String)
//  .operationName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.property.apiUrl">apiUrl</a></code> | <code>java.lang.String</code> | Override for the API URL. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.property.body">body</a></code> | <code>java.lang.String</code> | Override for the documentation body. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.property.operationName">operationName</a></code> | <code>java.lang.String</code> | Override for the operation name. |

---

##### `apiUrl`<sup>Optional</sup> <a name="apiUrl" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.property.apiUrl"></a>

```java
public java.lang.String getApiUrl();
```

- *Type:* java.lang.String

Override for the API URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#api_url ApiportalProductApiPage#api_url}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

Override for the documentation body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#body ApiportalProductApiPage#body}

---

##### `operationName`<sup>Optional</sup> <a name="operationName" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.property.operationName"></a>

```java
public java.lang.String getOperationName();
```

- *Type:* java.lang.String

Override for the operation name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#operation_name ApiportalProductApiPage#operation_name}

---

### ApiportalProductApiPageStatusException <a name="ApiportalProductApiPageStatusException" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusException"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusException.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_api_page.ApiportalProductApiPageStatusException;

ApiportalProductApiPageStatusException.builder()
    .build();
```


### ApiportalProductApiPageTags <a name="ApiportalProductApiPageTags" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_api_page.ApiportalProductApiPageTags;

ApiportalProductApiPageTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#key ApiportalProductApiPage#key}. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#value ApiportalProductApiPage#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#key ApiportalProductApiPage#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#value ApiportalProductApiPage#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiportalProductApiPageApiIdIdentifierPartsOutputReference <a name="ApiportalProductApiPageApiIdIdentifierPartsOutputReference" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_api_page.ApiportalProductApiPageApiIdIdentifierPartsOutputReference;

new ApiportalProductApiPageApiIdIdentifierPartsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierParts">ApiportalProductApiPageApiIdIdentifierParts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.internalValue"></a>

```java
public ApiportalProductApiPageApiIdIdentifierParts getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierParts">ApiportalProductApiPageApiIdIdentifierParts</a>

---


### ApiportalProductApiPageApiIdOutputReference <a name="ApiportalProductApiPageApiIdOutputReference" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_api_page.ApiportalProductApiPageApiIdOutputReference;

new ApiportalProductApiPageApiIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.identifierParts">identifierParts</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference">ApiportalProductApiPageApiIdIdentifierPartsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiId">ApiportalProductApiPageApiId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identifierParts`<sup>Required</sup> <a name="identifierParts" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.identifierParts"></a>

```java
public ApiportalProductApiPageApiIdIdentifierPartsOutputReference getIdentifierParts();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference">ApiportalProductApiPageApiIdIdentifierPartsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.internalValue"></a>

```java
public ApiportalProductApiPageApiId getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiId">ApiportalProductApiPageApiId</a>

---


### ApiportalProductApiPageDisplayContentOutputReference <a name="ApiportalProductApiPageDisplayContentOutputReference" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_api_page.ApiportalProductApiPageDisplayContentOutputReference;

new ApiportalProductApiPageDisplayContentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.putOverrides">putOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resetNone">resetNone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resetOverrides">resetOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOverrides` <a name="putOverrides" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.putOverrides"></a>

```java
public void putOverrides(ApiportalProductApiPageDisplayContentOverrides value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.putOverrides.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides">ApiportalProductApiPageDisplayContentOverrides</a>

---

##### `resetNone` <a name="resetNone" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resetNone"></a>

```java
public void resetNone()
```

##### `resetOverrides` <a name="resetOverrides" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resetOverrides"></a>

```java
public void resetOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.apiUrl">apiUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.operationName">operationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference">ApiportalProductApiPageDisplayContentOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.noneInput">noneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.overridesInput">overridesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides">ApiportalProductApiPageDisplayContentOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.none">none</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent">ApiportalProductApiPageDisplayContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiUrl`<sup>Required</sup> <a name="apiUrl" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.apiUrl"></a>

```java
public java.lang.String getApiUrl();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `operationName`<sup>Required</sup> <a name="operationName" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.operationName"></a>

```java
public java.lang.String getOperationName();
```

- *Type:* java.lang.String

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.overrides"></a>

```java
public ApiportalProductApiPageDisplayContentOverridesOutputReference getOverrides();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference">ApiportalProductApiPageDisplayContentOverridesOutputReference</a>

---

##### `noneInput`<sup>Optional</sup> <a name="noneInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.noneInput"></a>

```java
public java.lang.String getNoneInput();
```

- *Type:* java.lang.String

---

##### `overridesInput`<sup>Optional</sup> <a name="overridesInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.overridesInput"></a>

```java
public IResolvable|ApiportalProductApiPageDisplayContentOverrides getOverridesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides">ApiportalProductApiPageDisplayContentOverrides</a>

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.none"></a>

```java
public java.lang.String getNone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiportalProductApiPageDisplayContent getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent">ApiportalProductApiPageDisplayContent</a>

---


### ApiportalProductApiPageDisplayContentOverridesOutputReference <a name="ApiportalProductApiPageDisplayContentOverridesOutputReference" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_api_page.ApiportalProductApiPageDisplayContentOverridesOutputReference;

new ApiportalProductApiPageDisplayContentOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resetApiUrl">resetApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resetOperationName">resetOperationName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiUrl` <a name="resetApiUrl" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resetApiUrl"></a>

```java
public void resetApiUrl()
```

##### `resetBody` <a name="resetBody" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resetBody"></a>

```java
public void resetBody()
```

##### `resetOperationName` <a name="resetOperationName" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resetOperationName"></a>

```java
public void resetOperationName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.apiUrlInput">apiUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.operationNameInput">operationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.apiUrl">apiUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.operationName">operationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides">ApiportalProductApiPageDisplayContentOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiUrlInput`<sup>Optional</sup> <a name="apiUrlInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.apiUrlInput"></a>

```java
public java.lang.String getApiUrlInput();
```

- *Type:* java.lang.String

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `operationNameInput`<sup>Optional</sup> <a name="operationNameInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.operationNameInput"></a>

```java
public java.lang.String getOperationNameInput();
```

- *Type:* java.lang.String

---

##### `apiUrl`<sup>Required</sup> <a name="apiUrl" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.apiUrl"></a>

```java
public java.lang.String getApiUrl();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `operationName`<sup>Required</sup> <a name="operationName" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.operationName"></a>

```java
public java.lang.String getOperationName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiportalProductApiPageDisplayContentOverrides getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides">ApiportalProductApiPageDisplayContentOverrides</a>

---


### ApiportalProductApiPageStatusExceptionOutputReference <a name="ApiportalProductApiPageStatusExceptionOutputReference" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_api_page.ApiportalProductApiPageStatusExceptionOutputReference;

new ApiportalProductApiPageStatusExceptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.exception">exception</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusException">ApiportalProductApiPageStatusException</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exception`<sup>Required</sup> <a name="exception" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.exception"></a>

```java
public java.lang.String getException();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.internalValue"></a>

```java
public ApiportalProductApiPageStatusException getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusException">ApiportalProductApiPageStatusException</a>

---


### ApiportalProductApiPageTagsList <a name="ApiportalProductApiPageTagsList" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_api_page.ApiportalProductApiPageTagsList;

new ApiportalProductApiPageTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.get"></a>

```java
public ApiportalProductApiPageTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApiportalProductApiPageTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>>

---


### ApiportalProductApiPageTagsOutputReference <a name="ApiportalProductApiPageTagsOutputReference" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_api_page.ApiportalProductApiPageTagsOutputReference;

new ApiportalProductApiPageTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiportalProductApiPageTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>

---



