# `servicecatalogStackSetConstraint` Submodule <a name="`servicecatalogStackSetConstraint` Submodule" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogStackSetConstraint <a name="ServicecatalogStackSetConstraint" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_stack_set_constraint awscc_servicecatalog_stack_set_constraint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_stack_set_constraint.ServicecatalogStackSetConstraint;

ServicecatalogStackSetConstraint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountList(java.util.List<java.lang.String>)
    .adminRole(java.lang.String)
    .description(java.lang.String)
    .executionRole(java.lang.String)
    .portfolioId(java.lang.String)
    .productId(java.lang.String)
    .regionList(java.util.List<java.lang.String>)
    .stackInstanceControl(java.lang.String)
//  .acceptLanguage(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.accountList">accountList</a></code> | <code>java.util.List<java.lang.String></code> | One or more AWS accounts that will have access to the provisioned product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.adminRole">adminRole</a></code> | <code>java.lang.String</code> | AdminRole ARN. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the constraint. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.executionRole">executionRole</a></code> | <code>java.lang.String</code> | ExecutionRole name. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.portfolioId">portfolioId</a></code> | <code>java.lang.String</code> | The portfolio identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.productId">productId</a></code> | <code>java.lang.String</code> | The product identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.regionList">regionList</a></code> | <code>java.util.List<java.lang.String></code> | One or more AWS Regions where the provisioned product will be available. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.stackInstanceControl">stackInstanceControl</a></code> | <code>java.lang.String</code> | Permission to create, update, and delete stack instances. Choose from ALLOWED and NOT_ALLOWED. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | The language code. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountList`<sup>Required</sup> <a name="accountList" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.accountList"></a>

- *Type:* java.util.List<java.lang.String>

One or more AWS accounts that will have access to the provisioned product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_stack_set_constraint#account_list ServicecatalogStackSetConstraint#account_list}

---

##### `adminRole`<sup>Required</sup> <a name="adminRole" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.adminRole"></a>

- *Type:* java.lang.String

AdminRole ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_stack_set_constraint#admin_role ServicecatalogStackSetConstraint#admin_role}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_stack_set_constraint#description ServicecatalogStackSetConstraint#description}

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.executionRole"></a>

- *Type:* java.lang.String

ExecutionRole name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_stack_set_constraint#execution_role ServicecatalogStackSetConstraint#execution_role}

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.portfolioId"></a>

- *Type:* java.lang.String

The portfolio identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_stack_set_constraint#portfolio_id ServicecatalogStackSetConstraint#portfolio_id}

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.productId"></a>

- *Type:* java.lang.String

The product identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_stack_set_constraint#product_id ServicecatalogStackSetConstraint#product_id}

---

##### `regionList`<sup>Required</sup> <a name="regionList" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.regionList"></a>

- *Type:* java.util.List<java.lang.String>

One or more AWS Regions where the provisioned product will be available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_stack_set_constraint#region_list ServicecatalogStackSetConstraint#region_list}

---

##### `stackInstanceControl`<sup>Required</sup> <a name="stackInstanceControl" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.stackInstanceControl"></a>

- *Type:* java.lang.String

Permission to create, update, and delete stack instances. Choose from ALLOWED and NOT_ALLOWED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_stack_set_constraint#stack_instance_control ServicecatalogStackSetConstraint#stack_instance_control}

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.acceptLanguage"></a>

- *Type:* java.lang.String

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_stack_set_constraint#accept_language ServicecatalogStackSetConstraint#accept_language}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.resetAcceptLanguage">resetAcceptLanguage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAcceptLanguage` <a name="resetAcceptLanguage" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.resetAcceptLanguage"></a>

```java
public void resetAcceptLanguage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServicecatalogStackSetConstraint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isConstruct"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_stack_set_constraint.ServicecatalogStackSetConstraint;

ServicecatalogStackSetConstraint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_stack_set_constraint.ServicecatalogStackSetConstraint;

ServicecatalogStackSetConstraint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_stack_set_constraint.ServicecatalogStackSetConstraint;

ServicecatalogStackSetConstraint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_stack_set_constraint.ServicecatalogStackSetConstraint;

ServicecatalogStackSetConstraint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServicecatalogStackSetConstraint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ServicecatalogStackSetConstraint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServicecatalogStackSetConstraint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServicecatalogStackSetConstraint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_stack_set_constraint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogStackSetConstraint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.stackSetConstraintId">stackSetConstraintId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.acceptLanguageInput">acceptLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.accountListInput">accountListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.adminRoleInput">adminRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.executionRoleInput">executionRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.portfolioIdInput">portfolioIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.productIdInput">productIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.regionListInput">regionListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.stackInstanceControlInput">stackInstanceControlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.accountList">accountList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.adminRole">adminRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.portfolioId">portfolioId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.productId">productId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.regionList">regionList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.stackInstanceControl">stackInstanceControl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `stackSetConstraintId`<sup>Required</sup> <a name="stackSetConstraintId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.stackSetConstraintId"></a>

```java
public java.lang.String getStackSetConstraintId();
```

- *Type:* java.lang.String

---

##### `acceptLanguageInput`<sup>Optional</sup> <a name="acceptLanguageInput" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.acceptLanguageInput"></a>

```java
public java.lang.String getAcceptLanguageInput();
```

- *Type:* java.lang.String

---

##### `accountListInput`<sup>Optional</sup> <a name="accountListInput" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.accountListInput"></a>

```java
public java.util.List<java.lang.String> getAccountListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `adminRoleInput`<sup>Optional</sup> <a name="adminRoleInput" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.adminRoleInput"></a>

```java
public java.lang.String getAdminRoleInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.executionRoleInput"></a>

```java
public java.lang.String getExecutionRoleInput();
```

- *Type:* java.lang.String

---

##### `portfolioIdInput`<sup>Optional</sup> <a name="portfolioIdInput" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.portfolioIdInput"></a>

```java
public java.lang.String getPortfolioIdInput();
```

- *Type:* java.lang.String

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.productIdInput"></a>

```java
public java.lang.String getProductIdInput();
```

- *Type:* java.lang.String

---

##### `regionListInput`<sup>Optional</sup> <a name="regionListInput" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.regionListInput"></a>

```java
public java.util.List<java.lang.String> getRegionListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stackInstanceControlInput`<sup>Optional</sup> <a name="stackInstanceControlInput" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.stackInstanceControlInput"></a>

```java
public java.lang.String getStackInstanceControlInput();
```

- *Type:* java.lang.String

---

##### `acceptLanguage`<sup>Required</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.acceptLanguage"></a>

```java
public java.lang.String getAcceptLanguage();
```

- *Type:* java.lang.String

---

##### `accountList`<sup>Required</sup> <a name="accountList" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.accountList"></a>

```java
public java.util.List<java.lang.String> getAccountList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `adminRole`<sup>Required</sup> <a name="adminRole" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.adminRole"></a>

```java
public java.lang.String getAdminRole();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.portfolioId"></a>

```java
public java.lang.String getPortfolioId();
```

- *Type:* java.lang.String

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.productId"></a>

```java
public java.lang.String getProductId();
```

- *Type:* java.lang.String

---

##### `regionList`<sup>Required</sup> <a name="regionList" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.regionList"></a>

```java
public java.util.List<java.lang.String> getRegionList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stackInstanceControl`<sup>Required</sup> <a name="stackInstanceControl" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.stackInstanceControl"></a>

```java
public java.lang.String getStackInstanceControl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogStackSetConstraintConfig <a name="ServicecatalogStackSetConstraintConfig" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_stack_set_constraint.ServicecatalogStackSetConstraintConfig;

ServicecatalogStackSetConstraintConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountList(java.util.List<java.lang.String>)
    .adminRole(java.lang.String)
    .description(java.lang.String)
    .executionRole(java.lang.String)
    .portfolioId(java.lang.String)
    .productId(java.lang.String)
    .regionList(java.util.List<java.lang.String>)
    .stackInstanceControl(java.lang.String)
//  .acceptLanguage(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.accountList">accountList</a></code> | <code>java.util.List<java.lang.String></code> | One or more AWS accounts that will have access to the provisioned product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.adminRole">adminRole</a></code> | <code>java.lang.String</code> | AdminRole ARN. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the constraint. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | ExecutionRole name. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.portfolioId">portfolioId</a></code> | <code>java.lang.String</code> | The portfolio identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.productId">productId</a></code> | <code>java.lang.String</code> | The product identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.regionList">regionList</a></code> | <code>java.util.List<java.lang.String></code> | One or more AWS Regions where the provisioned product will be available. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.stackInstanceControl">stackInstanceControl</a></code> | <code>java.lang.String</code> | Permission to create, update, and delete stack instances. Choose from ALLOWED and NOT_ALLOWED. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | The language code. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountList`<sup>Required</sup> <a name="accountList" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.accountList"></a>

```java
public java.util.List<java.lang.String> getAccountList();
```

- *Type:* java.util.List<java.lang.String>

One or more AWS accounts that will have access to the provisioned product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_stack_set_constraint#account_list ServicecatalogStackSetConstraint#account_list}

---

##### `adminRole`<sup>Required</sup> <a name="adminRole" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.adminRole"></a>

```java
public java.lang.String getAdminRole();
```

- *Type:* java.lang.String

AdminRole ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_stack_set_constraint#admin_role ServicecatalogStackSetConstraint#admin_role}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_stack_set_constraint#description ServicecatalogStackSetConstraint#description}

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

ExecutionRole name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_stack_set_constraint#execution_role ServicecatalogStackSetConstraint#execution_role}

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.portfolioId"></a>

```java
public java.lang.String getPortfolioId();
```

- *Type:* java.lang.String

The portfolio identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_stack_set_constraint#portfolio_id ServicecatalogStackSetConstraint#portfolio_id}

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.productId"></a>

```java
public java.lang.String getProductId();
```

- *Type:* java.lang.String

The product identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_stack_set_constraint#product_id ServicecatalogStackSetConstraint#product_id}

---

##### `regionList`<sup>Required</sup> <a name="regionList" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.regionList"></a>

```java
public java.util.List<java.lang.String> getRegionList();
```

- *Type:* java.util.List<java.lang.String>

One or more AWS Regions where the provisioned product will be available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_stack_set_constraint#region_list ServicecatalogStackSetConstraint#region_list}

---

##### `stackInstanceControl`<sup>Required</sup> <a name="stackInstanceControl" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.stackInstanceControl"></a>

```java
public java.lang.String getStackInstanceControl();
```

- *Type:* java.lang.String

Permission to create, update, and delete stack instances. Choose from ALLOWED and NOT_ALLOWED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_stack_set_constraint#stack_instance_control ServicecatalogStackSetConstraint#stack_instance_control}

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.acceptLanguage"></a>

```java
public java.lang.String getAcceptLanguage();
```

- *Type:* java.lang.String

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_stack_set_constraint#accept_language ServicecatalogStackSetConstraint#accept_language}

---



