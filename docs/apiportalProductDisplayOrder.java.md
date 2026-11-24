# `apiportalProductDisplayOrder` Submodule <a name="`apiportalProductDisplayOrder` Submodule" id="@cdktn/provider-awscc.apiportalProductDisplayOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiportalProductDisplayOrder <a name="ApiportalProductDisplayOrder" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order awscc_apiportal_product_display_order}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_display_order.ApiportalProductDisplayOrder;

ApiportalProductDisplayOrder.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .productId(java.lang.String)
//  .contents(IResolvable|java.util.List<ApiportalProductDisplayOrderContents>)
//  .overviewPageArn(java.lang.String)
//  .productPageArns(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.productId">productId</a></code> | <code>java.lang.String</code> | The identifier of the parent Product. Singleton key for this CFN type. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.contents">contents</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>></code> | Sectioned arrangement of ProductApiPage ARNs. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.overviewPageArn">overviewPageArn</a></code> | <code>java.lang.String</code> | ARN of the ProductPage rendered as the overview/landing page. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.productPageArns">productPageArns</a></code> | <code>java.util.List<java.lang.String></code> | Top-level ProductPage ARNs in display order. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.productId"></a>

- *Type:* java.lang.String

The identifier of the parent Product. Singleton key for this CFN type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#product_id ApiportalProductDisplayOrder#product_id}

---

##### `contents`<sup>Optional</sup> <a name="contents" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.contents"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>>

Sectioned arrangement of ProductApiPage ARNs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#contents ApiportalProductDisplayOrder#contents}

---

##### `overviewPageArn`<sup>Optional</sup> <a name="overviewPageArn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.overviewPageArn"></a>

- *Type:* java.lang.String

ARN of the ProductPage rendered as the overview/landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#overview_page_arn ApiportalProductDisplayOrder#overview_page_arn}

---

##### `productPageArns`<sup>Optional</sup> <a name="productPageArns" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.productPageArns"></a>

- *Type:* java.util.List<java.lang.String>

Top-level ProductPage ARNs in display order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#product_page_arns ApiportalProductDisplayOrder#product_page_arns}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.putContents">putContents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.resetContents">resetContents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.resetOverviewPageArn">resetOverviewPageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.resetProductPageArns">resetProductPageArns</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContents` <a name="putContents" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.putContents"></a>

```java
public void putContents(IResolvable|java.util.List<ApiportalProductDisplayOrderContents> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.putContents.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>>

---

##### `resetContents` <a name="resetContents" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.resetContents"></a>

```java
public void resetContents()
```

##### `resetOverviewPageArn` <a name="resetOverviewPageArn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.resetOverviewPageArn"></a>

```java
public void resetOverviewPageArn()
```

##### `resetProductPageArns` <a name="resetProductPageArns" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.resetProductPageArns"></a>

```java
public void resetProductPageArns()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApiportalProductDisplayOrder resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isConstruct"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_display_order.ApiportalProductDisplayOrder;

ApiportalProductDisplayOrder.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_display_order.ApiportalProductDisplayOrder;

ApiportalProductDisplayOrder.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_display_order.ApiportalProductDisplayOrder;

ApiportalProductDisplayOrder.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_display_order.ApiportalProductDisplayOrder;

ApiportalProductDisplayOrder.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApiportalProductDisplayOrder.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApiportalProductDisplayOrder resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApiportalProductDisplayOrder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApiportalProductDisplayOrder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApiportalProductDisplayOrder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.contents">contents</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList">ApiportalProductDisplayOrderContentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.contentsInput">contentsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.overviewPageArnInput">overviewPageArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.productIdInput">productIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.productPageArnsInput">productPageArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.overviewPageArn">overviewPageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.productId">productId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.productPageArns">productPageArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.contents"></a>

```java
public ApiportalProductDisplayOrderContentsList getContents();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList">ApiportalProductDisplayOrderContentsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `contentsInput`<sup>Optional</sup> <a name="contentsInput" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.contentsInput"></a>

```java
public IResolvable|java.util.List<ApiportalProductDisplayOrderContents> getContentsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>>

---

##### `overviewPageArnInput`<sup>Optional</sup> <a name="overviewPageArnInput" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.overviewPageArnInput"></a>

```java
public java.lang.String getOverviewPageArnInput();
```

- *Type:* java.lang.String

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.productIdInput"></a>

```java
public java.lang.String getProductIdInput();
```

- *Type:* java.lang.String

---

##### `productPageArnsInput`<sup>Optional</sup> <a name="productPageArnsInput" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.productPageArnsInput"></a>

```java
public java.util.List<java.lang.String> getProductPageArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `overviewPageArn`<sup>Required</sup> <a name="overviewPageArn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.overviewPageArn"></a>

```java
public java.lang.String getOverviewPageArn();
```

- *Type:* java.lang.String

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.productId"></a>

```java
public java.lang.String getProductId();
```

- *Type:* java.lang.String

---

##### `productPageArns`<sup>Required</sup> <a name="productPageArns" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.productPageArns"></a>

```java
public java.util.List<java.lang.String> getProductPageArns();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiportalProductDisplayOrderConfig <a name="ApiportalProductDisplayOrderConfig" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_display_order.ApiportalProductDisplayOrderConfig;

ApiportalProductDisplayOrderConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .productId(java.lang.String)
//  .contents(IResolvable|java.util.List<ApiportalProductDisplayOrderContents>)
//  .overviewPageArn(java.lang.String)
//  .productPageArns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.productId">productId</a></code> | <code>java.lang.String</code> | The identifier of the parent Product. Singleton key for this CFN type. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.contents">contents</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>></code> | Sectioned arrangement of ProductApiPage ARNs. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.overviewPageArn">overviewPageArn</a></code> | <code>java.lang.String</code> | ARN of the ProductPage rendered as the overview/landing page. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.productPageArns">productPageArns</a></code> | <code>java.util.List<java.lang.String></code> | Top-level ProductPage ARNs in display order. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.productId"></a>

```java
public java.lang.String getProductId();
```

- *Type:* java.lang.String

The identifier of the parent Product. Singleton key for this CFN type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#product_id ApiportalProductDisplayOrder#product_id}

---

##### `contents`<sup>Optional</sup> <a name="contents" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.contents"></a>

```java
public IResolvable|java.util.List<ApiportalProductDisplayOrderContents> getContents();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>>

Sectioned arrangement of ProductApiPage ARNs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#contents ApiportalProductDisplayOrder#contents}

---

##### `overviewPageArn`<sup>Optional</sup> <a name="overviewPageArn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.overviewPageArn"></a>

```java
public java.lang.String getOverviewPageArn();
```

- *Type:* java.lang.String

ARN of the ProductPage rendered as the overview/landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#overview_page_arn ApiportalProductDisplayOrder#overview_page_arn}

---

##### `productPageArns`<sup>Optional</sup> <a name="productPageArns" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.productPageArns"></a>

```java
public java.util.List<java.lang.String> getProductPageArns();
```

- *Type:* java.util.List<java.lang.String>

Top-level ProductPage ARNs in display order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#product_page_arns ApiportalProductDisplayOrder#product_page_arns}

---

### ApiportalProductDisplayOrderContents <a name="ApiportalProductDisplayOrderContents" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_display_order.ApiportalProductDisplayOrderContents;

ApiportalProductDisplayOrderContents.builder()
//  .productApiPageArns(java.util.List<java.lang.String>)
//  .sectionName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents.property.productApiPageArns">productApiPageArns</a></code> | <code>java.util.List<java.lang.String></code> | Ordered ProductApiPage ARNs shown under this section. Required; use an empty list for a placeholder section. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents.property.sectionName">sectionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#section_name ApiportalProductDisplayOrder#section_name}. |

---

##### `productApiPageArns`<sup>Optional</sup> <a name="productApiPageArns" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents.property.productApiPageArns"></a>

```java
public java.util.List<java.lang.String> getProductApiPageArns();
```

- *Type:* java.util.List<java.lang.String>

Ordered ProductApiPage ARNs shown under this section. Required; use an empty list for a placeholder section.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#product_api_page_arns ApiportalProductDisplayOrder#product_api_page_arns}

---

##### `sectionName`<sup>Optional</sup> <a name="sectionName" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents.property.sectionName"></a>

```java
public java.lang.String getSectionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#section_name ApiportalProductDisplayOrder#section_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiportalProductDisplayOrderContentsList <a name="ApiportalProductDisplayOrderContentsList" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_display_order.ApiportalProductDisplayOrderContentsList;

new ApiportalProductDisplayOrderContentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.get"></a>

```java
public ApiportalProductDisplayOrderContentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApiportalProductDisplayOrderContents> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>>

---


### ApiportalProductDisplayOrderContentsOutputReference <a name="ApiportalProductDisplayOrderContentsOutputReference" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_product_display_order.ApiportalProductDisplayOrderContentsOutputReference;

new ApiportalProductDisplayOrderContentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.resetProductApiPageArns">resetProductApiPageArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.resetSectionName">resetSectionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProductApiPageArns` <a name="resetProductApiPageArns" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.resetProductApiPageArns"></a>

```java
public void resetProductApiPageArns()
```

##### `resetSectionName` <a name="resetSectionName" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.resetSectionName"></a>

```java
public void resetSectionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.productApiPageArnsInput">productApiPageArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.sectionNameInput">sectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.productApiPageArns">productApiPageArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.sectionName">sectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `productApiPageArnsInput`<sup>Optional</sup> <a name="productApiPageArnsInput" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.productApiPageArnsInput"></a>

```java
public java.util.List<java.lang.String> getProductApiPageArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sectionNameInput`<sup>Optional</sup> <a name="sectionNameInput" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.sectionNameInput"></a>

```java
public java.lang.String getSectionNameInput();
```

- *Type:* java.lang.String

---

##### `productApiPageArns`<sup>Required</sup> <a name="productApiPageArns" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.productApiPageArns"></a>

```java
public java.util.List<java.lang.String> getProductApiPageArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sectionName`<sup>Required</sup> <a name="sectionName" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.sectionName"></a>

```java
public java.lang.String getSectionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiportalProductDisplayOrderContents getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>

---



