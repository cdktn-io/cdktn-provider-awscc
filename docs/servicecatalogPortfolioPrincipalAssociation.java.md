# `servicecatalogPortfolioPrincipalAssociation` Submodule <a name="`servicecatalogPortfolioPrincipalAssociation` Submodule" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogPortfolioPrincipalAssociation <a name="ServicecatalogPortfolioPrincipalAssociation" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_portfolio_principal_association awscc_servicecatalog_portfolio_principal_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_portfolio_principal_association.ServicecatalogPortfolioPrincipalAssociation;

ServicecatalogPortfolioPrincipalAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .principalType(java.lang.String)
//  .acceptLanguage(java.lang.String)
//  .portfolioId(java.lang.String)
//  .principalArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.principalType">principalType</a></code> | <code>java.lang.String</code> | The principal type. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | The language code. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.portfolioId">portfolioId</a></code> | <code>java.lang.String</code> | The portfolio identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.principalArn">principalArn</a></code> | <code>java.lang.String</code> | The ARN of the principal (user, role, or group). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.principalType"></a>

- *Type:* java.lang.String

The principal type.

The supported value is IAM if you use a fully defined Amazon Resource Name (ARN), or IAM_PATTERN if you use an ARN with no accountID, with or without wildcard characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_portfolio_principal_association#principal_type ServicecatalogPortfolioPrincipalAssociation#principal_type}

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.acceptLanguage"></a>

- *Type:* java.lang.String

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_portfolio_principal_association#accept_language ServicecatalogPortfolioPrincipalAssociation#accept_language}

---

##### `portfolioId`<sup>Optional</sup> <a name="portfolioId" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.portfolioId"></a>

- *Type:* java.lang.String

The portfolio identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_portfolio_principal_association#portfolio_id ServicecatalogPortfolioPrincipalAssociation#portfolio_id}

---

##### `principalArn`<sup>Optional</sup> <a name="principalArn" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.principalArn"></a>

- *Type:* java.lang.String

The ARN of the principal (user, role, or group).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_portfolio_principal_association#principal_arn ServicecatalogPortfolioPrincipalAssociation#principal_arn}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.resetAcceptLanguage">resetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.resetPortfolioId">resetPortfolioId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.resetPrincipalArn">resetPrincipalArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAcceptLanguage` <a name="resetAcceptLanguage" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.resetAcceptLanguage"></a>

```java
public void resetAcceptLanguage()
```

##### `resetPortfolioId` <a name="resetPortfolioId" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.resetPortfolioId"></a>

```java
public void resetPortfolioId()
```

##### `resetPrincipalArn` <a name="resetPrincipalArn" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.resetPrincipalArn"></a>

```java
public void resetPrincipalArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServicecatalogPortfolioPrincipalAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.isConstruct"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_portfolio_principal_association.ServicecatalogPortfolioPrincipalAssociation;

ServicecatalogPortfolioPrincipalAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_portfolio_principal_association.ServicecatalogPortfolioPrincipalAssociation;

ServicecatalogPortfolioPrincipalAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_portfolio_principal_association.ServicecatalogPortfolioPrincipalAssociation;

ServicecatalogPortfolioPrincipalAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_portfolio_principal_association.ServicecatalogPortfolioPrincipalAssociation;

ServicecatalogPortfolioPrincipalAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServicecatalogPortfolioPrincipalAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ServicecatalogPortfolioPrincipalAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServicecatalogPortfolioPrincipalAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServicecatalogPortfolioPrincipalAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_portfolio_principal_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogPortfolioPrincipalAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.acceptLanguageInput">acceptLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.portfolioIdInput">portfolioIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.principalArnInput">principalArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.principalTypeInput">principalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.portfolioId">portfolioId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.principalArn">principalArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `acceptLanguageInput`<sup>Optional</sup> <a name="acceptLanguageInput" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.acceptLanguageInput"></a>

```java
public java.lang.String getAcceptLanguageInput();
```

- *Type:* java.lang.String

---

##### `portfolioIdInput`<sup>Optional</sup> <a name="portfolioIdInput" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.portfolioIdInput"></a>

```java
public java.lang.String getPortfolioIdInput();
```

- *Type:* java.lang.String

---

##### `principalArnInput`<sup>Optional</sup> <a name="principalArnInput" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.principalArnInput"></a>

```java
public java.lang.String getPrincipalArnInput();
```

- *Type:* java.lang.String

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.principalTypeInput"></a>

```java
public java.lang.String getPrincipalTypeInput();
```

- *Type:* java.lang.String

---

##### `acceptLanguage`<sup>Required</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.acceptLanguage"></a>

```java
public java.lang.String getAcceptLanguage();
```

- *Type:* java.lang.String

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.portfolioId"></a>

```java
public java.lang.String getPortfolioId();
```

- *Type:* java.lang.String

---

##### `principalArn`<sup>Required</sup> <a name="principalArn" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.principalArn"></a>

```java
public java.lang.String getPrincipalArn();
```

- *Type:* java.lang.String

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogPortfolioPrincipalAssociationConfig <a name="ServicecatalogPortfolioPrincipalAssociationConfig" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_portfolio_principal_association.ServicecatalogPortfolioPrincipalAssociationConfig;

ServicecatalogPortfolioPrincipalAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .principalType(java.lang.String)
//  .acceptLanguage(java.lang.String)
//  .portfolioId(java.lang.String)
//  .principalArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.principalType">principalType</a></code> | <code>java.lang.String</code> | The principal type. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | The language code. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.portfolioId">portfolioId</a></code> | <code>java.lang.String</code> | The portfolio identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.principalArn">principalArn</a></code> | <code>java.lang.String</code> | The ARN of the principal (user, role, or group). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

The principal type.

The supported value is IAM if you use a fully defined Amazon Resource Name (ARN), or IAM_PATTERN if you use an ARN with no accountID, with or without wildcard characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_portfolio_principal_association#principal_type ServicecatalogPortfolioPrincipalAssociation#principal_type}

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.acceptLanguage"></a>

```java
public java.lang.String getAcceptLanguage();
```

- *Type:* java.lang.String

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_portfolio_principal_association#accept_language ServicecatalogPortfolioPrincipalAssociation#accept_language}

---

##### `portfolioId`<sup>Optional</sup> <a name="portfolioId" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.portfolioId"></a>

```java
public java.lang.String getPortfolioId();
```

- *Type:* java.lang.String

The portfolio identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_portfolio_principal_association#portfolio_id ServicecatalogPortfolioPrincipalAssociation#portfolio_id}

---

##### `principalArn`<sup>Optional</sup> <a name="principalArn" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.principalArn"></a>

```java
public java.lang.String getPrincipalArn();
```

- *Type:* java.lang.String

The ARN of the principal (user, role, or group).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_portfolio_principal_association#principal_arn ServicecatalogPortfolioPrincipalAssociation#principal_arn}

---



