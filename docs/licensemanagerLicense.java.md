# `licensemanagerLicense` Submodule <a name="`licensemanagerLicense` Submodule" id="@cdktn/provider-awscc.licensemanagerLicense"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerLicense <a name="LicensemanagerLicense" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license awscc_licensemanager_license}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license.LicensemanagerLicense;

LicensemanagerLicense.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .beneficiary(java.lang.String)
    .consumptionConfiguration(LicensemanagerLicenseConsumptionConfiguration)
    .entitlements(IResolvable|java.util.List<LicensemanagerLicenseEntitlements>)
    .homeRegion(java.lang.String)
    .issuer(LicensemanagerLicenseIssuer)
    .licenseName(java.lang.String)
    .productName(java.lang.String)
    .productSku(java.lang.String)
    .validity(LicensemanagerLicenseValidity)
//  .licenseMetadata(IResolvable|java.util.List<LicensemanagerLicenseLicenseMetadata>)
//  .status(java.lang.String)
//  .tags(IResolvable|java.util.List<LicensemanagerLicenseTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.beneficiary">beneficiary</a></code> | <code>java.lang.String</code> | Beneficiary of the license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.consumptionConfiguration">consumptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#consumption_configuration LicensemanagerLicense#consumption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.entitlements">entitlements</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#entitlements LicensemanagerLicense#entitlements}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.homeRegion">homeRegion</a></code> | <code>java.lang.String</code> | Home region for the created license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.issuer">issuer</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#issuer LicensemanagerLicense#issuer}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.licenseName">licenseName</a></code> | <code>java.lang.String</code> | Name for the created license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.productName">productName</a></code> | <code>java.lang.String</code> | Product name for the created license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.productSku">productSku</a></code> | <code>java.lang.String</code> | ProductSKU of the license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.validity">validity</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#validity LicensemanagerLicense#validity}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.licenseMetadata">licenseMetadata</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#license_metadata LicensemanagerLicense#license_metadata}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#status LicensemanagerLicense#status}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>></code> | A list of tags to attach. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `beneficiary`<sup>Required</sup> <a name="beneficiary" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.beneficiary"></a>

- *Type:* java.lang.String

Beneficiary of the license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#beneficiary LicensemanagerLicense#beneficiary}

---

##### `consumptionConfiguration`<sup>Required</sup> <a name="consumptionConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.consumptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#consumption_configuration LicensemanagerLicense#consumption_configuration}.

---

##### `entitlements`<sup>Required</sup> <a name="entitlements" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.entitlements"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#entitlements LicensemanagerLicense#entitlements}.

---

##### `homeRegion`<sup>Required</sup> <a name="homeRegion" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.homeRegion"></a>

- *Type:* java.lang.String

Home region for the created license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#home_region LicensemanagerLicense#home_region}

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.issuer"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#issuer LicensemanagerLicense#issuer}.

---

##### `licenseName`<sup>Required</sup> <a name="licenseName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.licenseName"></a>

- *Type:* java.lang.String

Name for the created license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#license_name LicensemanagerLicense#license_name}

---

##### `productName`<sup>Required</sup> <a name="productName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.productName"></a>

- *Type:* java.lang.String

Product name for the created license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#product_name LicensemanagerLicense#product_name}

---

##### `productSku`<sup>Required</sup> <a name="productSku" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.productSku"></a>

- *Type:* java.lang.String

ProductSKU of the license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#product_sku LicensemanagerLicense#product_sku}

---

##### `validity`<sup>Required</sup> <a name="validity" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.validity"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#validity LicensemanagerLicense#validity}.

---

##### `licenseMetadata`<sup>Optional</sup> <a name="licenseMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.licenseMetadata"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#license_metadata LicensemanagerLicense#license_metadata}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#status LicensemanagerLicense#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>>

A list of tags to attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#tags LicensemanagerLicense#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putConsumptionConfiguration">putConsumptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putEntitlements">putEntitlements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putIssuer">putIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putLicenseMetadata">putLicenseMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putValidity">putValidity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetLicenseMetadata">resetLicenseMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConsumptionConfiguration` <a name="putConsumptionConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putConsumptionConfiguration"></a>

```java
public void putConsumptionConfiguration(LicensemanagerLicenseConsumptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putConsumptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a>

---

##### `putEntitlements` <a name="putEntitlements" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putEntitlements"></a>

```java
public void putEntitlements(IResolvable|java.util.List<LicensemanagerLicenseEntitlements> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putEntitlements.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>>

---

##### `putIssuer` <a name="putIssuer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putIssuer"></a>

```java
public void putIssuer(LicensemanagerLicenseIssuer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putIssuer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a>

---

##### `putLicenseMetadata` <a name="putLicenseMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putLicenseMetadata"></a>

```java
public void putLicenseMetadata(IResolvable|java.util.List<LicensemanagerLicenseLicenseMetadata> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putLicenseMetadata.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<LicensemanagerLicenseTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>>

---

##### `putValidity` <a name="putValidity" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putValidity"></a>

```java
public void putValidity(LicensemanagerLicenseValidity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putValidity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a>

---

##### `resetLicenseMetadata` <a name="resetLicenseMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetLicenseMetadata"></a>

```java
public void resetLicenseMetadata()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LicensemanagerLicense resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isConstruct"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license.LicensemanagerLicense;

LicensemanagerLicense.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license.LicensemanagerLicense;

LicensemanagerLicense.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license.LicensemanagerLicense;

LicensemanagerLicense.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license.LicensemanagerLicense;

LicensemanagerLicense.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LicensemanagerLicense.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LicensemanagerLicense resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LicensemanagerLicense to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LicensemanagerLicense that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LicensemanagerLicense to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.consumptionConfiguration">consumptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.entitlements">entitlements</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList">LicensemanagerLicenseEntitlementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.issuer">issuer</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference">LicensemanagerLicenseIssuerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseArn">licenseArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseMetadata">licenseMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList">LicensemanagerLicenseLicenseMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList">LicensemanagerLicenseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.validity">validity</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference">LicensemanagerLicenseValidityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.beneficiaryInput">beneficiaryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.consumptionConfigurationInput">consumptionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.entitlementsInput">entitlementsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.homeRegionInput">homeRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.issuerInput">issuerInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseMetadataInput">licenseMetadataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseNameInput">licenseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productNameInput">productNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productSkuInput">productSkuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.validityInput">validityInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.beneficiary">beneficiary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.homeRegion">homeRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseName">licenseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productName">productName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productSku">productSku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `consumptionConfiguration`<sup>Required</sup> <a name="consumptionConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.consumptionConfiguration"></a>

```java
public LicensemanagerLicenseConsumptionConfigurationOutputReference getConsumptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationOutputReference</a>

---

##### `entitlements`<sup>Required</sup> <a name="entitlements" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.entitlements"></a>

```java
public LicensemanagerLicenseEntitlementsList getEntitlements();
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList">LicensemanagerLicenseEntitlementsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.issuer"></a>

```java
public LicensemanagerLicenseIssuerOutputReference getIssuer();
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference">LicensemanagerLicenseIssuerOutputReference</a>

---

##### `licenseArn`<sup>Required</sup> <a name="licenseArn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseArn"></a>

```java
public java.lang.String getLicenseArn();
```

- *Type:* java.lang.String

---

##### `licenseMetadata`<sup>Required</sup> <a name="licenseMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseMetadata"></a>

```java
public LicensemanagerLicenseLicenseMetadataList getLicenseMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList">LicensemanagerLicenseLicenseMetadataList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tags"></a>

```java
public LicensemanagerLicenseTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList">LicensemanagerLicenseTagsList</a>

---

##### `validity`<sup>Required</sup> <a name="validity" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.validity"></a>

```java
public LicensemanagerLicenseValidityOutputReference getValidity();
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference">LicensemanagerLicenseValidityOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `beneficiaryInput`<sup>Optional</sup> <a name="beneficiaryInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.beneficiaryInput"></a>

```java
public java.lang.String getBeneficiaryInput();
```

- *Type:* java.lang.String

---

##### `consumptionConfigurationInput`<sup>Optional</sup> <a name="consumptionConfigurationInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.consumptionConfigurationInput"></a>

```java
public IResolvable|LicensemanagerLicenseConsumptionConfiguration getConsumptionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a>

---

##### `entitlementsInput`<sup>Optional</sup> <a name="entitlementsInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.entitlementsInput"></a>

```java
public IResolvable|java.util.List<LicensemanagerLicenseEntitlements> getEntitlementsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>>

---

##### `homeRegionInput`<sup>Optional</sup> <a name="homeRegionInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.homeRegionInput"></a>

```java
public java.lang.String getHomeRegionInput();
```

- *Type:* java.lang.String

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.issuerInput"></a>

```java
public IResolvable|LicensemanagerLicenseIssuer getIssuerInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a>

---

##### `licenseMetadataInput`<sup>Optional</sup> <a name="licenseMetadataInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseMetadataInput"></a>

```java
public IResolvable|java.util.List<LicensemanagerLicenseLicenseMetadata> getLicenseMetadataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>>

---

##### `licenseNameInput`<sup>Optional</sup> <a name="licenseNameInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseNameInput"></a>

```java
public java.lang.String getLicenseNameInput();
```

- *Type:* java.lang.String

---

##### `productNameInput`<sup>Optional</sup> <a name="productNameInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productNameInput"></a>

```java
public java.lang.String getProductNameInput();
```

- *Type:* java.lang.String

---

##### `productSkuInput`<sup>Optional</sup> <a name="productSkuInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productSkuInput"></a>

```java
public java.lang.String getProductSkuInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tagsInput"></a>

```java
public IResolvable|java.util.List<LicensemanagerLicenseTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>>

---

##### `validityInput`<sup>Optional</sup> <a name="validityInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.validityInput"></a>

```java
public IResolvable|LicensemanagerLicenseValidity getValidityInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a>

---

##### `beneficiary`<sup>Required</sup> <a name="beneficiary" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.beneficiary"></a>

```java
public java.lang.String getBeneficiary();
```

- *Type:* java.lang.String

---

##### `homeRegion`<sup>Required</sup> <a name="homeRegion" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.homeRegion"></a>

```java
public java.lang.String getHomeRegion();
```

- *Type:* java.lang.String

---

##### `licenseName`<sup>Required</sup> <a name="licenseName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseName"></a>

```java
public java.lang.String getLicenseName();
```

- *Type:* java.lang.String

---

##### `productName`<sup>Required</sup> <a name="productName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productName"></a>

```java
public java.lang.String getProductName();
```

- *Type:* java.lang.String

---

##### `productSku`<sup>Required</sup> <a name="productSku" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productSku"></a>

```java
public java.lang.String getProductSku();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerLicenseConfig <a name="LicensemanagerLicenseConfig" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license.LicensemanagerLicenseConfig;

LicensemanagerLicenseConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .beneficiary(java.lang.String)
    .consumptionConfiguration(LicensemanagerLicenseConsumptionConfiguration)
    .entitlements(IResolvable|java.util.List<LicensemanagerLicenseEntitlements>)
    .homeRegion(java.lang.String)
    .issuer(LicensemanagerLicenseIssuer)
    .licenseName(java.lang.String)
    .productName(java.lang.String)
    .productSku(java.lang.String)
    .validity(LicensemanagerLicenseValidity)
//  .licenseMetadata(IResolvable|java.util.List<LicensemanagerLicenseLicenseMetadata>)
//  .status(java.lang.String)
//  .tags(IResolvable|java.util.List<LicensemanagerLicenseTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.beneficiary">beneficiary</a></code> | <code>java.lang.String</code> | Beneficiary of the license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.consumptionConfiguration">consumptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#consumption_configuration LicensemanagerLicense#consumption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.entitlements">entitlements</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#entitlements LicensemanagerLicense#entitlements}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.homeRegion">homeRegion</a></code> | <code>java.lang.String</code> | Home region for the created license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.issuer">issuer</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#issuer LicensemanagerLicense#issuer}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.licenseName">licenseName</a></code> | <code>java.lang.String</code> | Name for the created license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.productName">productName</a></code> | <code>java.lang.String</code> | Product name for the created license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.productSku">productSku</a></code> | <code>java.lang.String</code> | ProductSKU of the license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.validity">validity</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#validity LicensemanagerLicense#validity}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.licenseMetadata">licenseMetadata</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#license_metadata LicensemanagerLicense#license_metadata}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#status LicensemanagerLicense#status}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>></code> | A list of tags to attach. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `beneficiary`<sup>Required</sup> <a name="beneficiary" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.beneficiary"></a>

```java
public java.lang.String getBeneficiary();
```

- *Type:* java.lang.String

Beneficiary of the license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#beneficiary LicensemanagerLicense#beneficiary}

---

##### `consumptionConfiguration`<sup>Required</sup> <a name="consumptionConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.consumptionConfiguration"></a>

```java
public LicensemanagerLicenseConsumptionConfiguration getConsumptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#consumption_configuration LicensemanagerLicense#consumption_configuration}.

---

##### `entitlements`<sup>Required</sup> <a name="entitlements" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.entitlements"></a>

```java
public IResolvable|java.util.List<LicensemanagerLicenseEntitlements> getEntitlements();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#entitlements LicensemanagerLicense#entitlements}.

---

##### `homeRegion`<sup>Required</sup> <a name="homeRegion" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.homeRegion"></a>

```java
public java.lang.String getHomeRegion();
```

- *Type:* java.lang.String

Home region for the created license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#home_region LicensemanagerLicense#home_region}

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.issuer"></a>

```java
public LicensemanagerLicenseIssuer getIssuer();
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#issuer LicensemanagerLicense#issuer}.

---

##### `licenseName`<sup>Required</sup> <a name="licenseName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.licenseName"></a>

```java
public java.lang.String getLicenseName();
```

- *Type:* java.lang.String

Name for the created license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#license_name LicensemanagerLicense#license_name}

---

##### `productName`<sup>Required</sup> <a name="productName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.productName"></a>

```java
public java.lang.String getProductName();
```

- *Type:* java.lang.String

Product name for the created license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#product_name LicensemanagerLicense#product_name}

---

##### `productSku`<sup>Required</sup> <a name="productSku" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.productSku"></a>

```java
public java.lang.String getProductSku();
```

- *Type:* java.lang.String

ProductSKU of the license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#product_sku LicensemanagerLicense#product_sku}

---

##### `validity`<sup>Required</sup> <a name="validity" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.validity"></a>

```java
public LicensemanagerLicenseValidity getValidity();
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#validity LicensemanagerLicense#validity}.

---

##### `licenseMetadata`<sup>Optional</sup> <a name="licenseMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.licenseMetadata"></a>

```java
public IResolvable|java.util.List<LicensemanagerLicenseLicenseMetadata> getLicenseMetadata();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#license_metadata LicensemanagerLicense#license_metadata}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#status LicensemanagerLicense#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.tags"></a>

```java
public IResolvable|java.util.List<LicensemanagerLicenseTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>>

A list of tags to attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#tags LicensemanagerLicense#tags}

---

### LicensemanagerLicenseConsumptionConfiguration <a name="LicensemanagerLicenseConsumptionConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license.LicensemanagerLicenseConsumptionConfiguration;

LicensemanagerLicenseConsumptionConfiguration.builder()
//  .borrowConfiguration(LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration)
//  .provisionalConfiguration(LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration)
//  .renewType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.borrowConfiguration">borrowConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#borrow_configuration LicensemanagerLicense#borrow_configuration}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.provisionalConfiguration">provisionalConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#provisional_configuration LicensemanagerLicense#provisional_configuration}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.renewType">renewType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#renew_type LicensemanagerLicense#renew_type}. |

---

##### `borrowConfiguration`<sup>Optional</sup> <a name="borrowConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.borrowConfiguration"></a>

```java
public LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration getBorrowConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#borrow_configuration LicensemanagerLicense#borrow_configuration}.

---

##### `provisionalConfiguration`<sup>Optional</sup> <a name="provisionalConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.provisionalConfiguration"></a>

```java
public LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration getProvisionalConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#provisional_configuration LicensemanagerLicense#provisional_configuration}.

---

##### `renewType`<sup>Optional</sup> <a name="renewType" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.renewType"></a>

```java
public java.lang.String getRenewType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#renew_type LicensemanagerLicense#renew_type}.

---

### LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration <a name="LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration;

LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration.builder()
//  .allowEarlyCheckIn(java.lang.Boolean|IResolvable)
//  .maxTimeToLiveInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration.property.allowEarlyCheckIn">allowEarlyCheckIn</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#allow_early_check_in LicensemanagerLicense#allow_early_check_in}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration.property.maxTimeToLiveInMinutes">maxTimeToLiveInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#max_time_to_live_in_minutes LicensemanagerLicense#max_time_to_live_in_minutes}. |

---

##### `allowEarlyCheckIn`<sup>Optional</sup> <a name="allowEarlyCheckIn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration.property.allowEarlyCheckIn"></a>

```java
public java.lang.Boolean|IResolvable getAllowEarlyCheckIn();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#allow_early_check_in LicensemanagerLicense#allow_early_check_in}.

---

##### `maxTimeToLiveInMinutes`<sup>Optional</sup> <a name="maxTimeToLiveInMinutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration.property.maxTimeToLiveInMinutes"></a>

```java
public java.lang.Number getMaxTimeToLiveInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#max_time_to_live_in_minutes LicensemanagerLicense#max_time_to_live_in_minutes}.

---

### LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration <a name="LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration;

LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration.builder()
//  .maxTimeToLiveInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration.property.maxTimeToLiveInMinutes">maxTimeToLiveInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#max_time_to_live_in_minutes LicensemanagerLicense#max_time_to_live_in_minutes}. |

---

##### `maxTimeToLiveInMinutes`<sup>Optional</sup> <a name="maxTimeToLiveInMinutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration.property.maxTimeToLiveInMinutes"></a>

```java
public java.lang.Number getMaxTimeToLiveInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#max_time_to_live_in_minutes LicensemanagerLicense#max_time_to_live_in_minutes}.

---

### LicensemanagerLicenseEntitlements <a name="LicensemanagerLicenseEntitlements" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license.LicensemanagerLicenseEntitlements;

LicensemanagerLicenseEntitlements.builder()
    .name(java.lang.String)
    .unit(java.lang.String)
//  .allowCheckIn(java.lang.Boolean|IResolvable)
//  .maxCount(java.lang.Number)
//  .overage(java.lang.Boolean|IResolvable)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#unit LicensemanagerLicense#unit}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.allowCheckIn">allowCheckIn</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#allow_check_in LicensemanagerLicense#allow_check_in}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.maxCount">maxCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#max_count LicensemanagerLicense#max_count}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.overage">overage</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#overage LicensemanagerLicense#overage}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#value LicensemanagerLicense#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#unit LicensemanagerLicense#unit}.

---

##### `allowCheckIn`<sup>Optional</sup> <a name="allowCheckIn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.allowCheckIn"></a>

```java
public java.lang.Boolean|IResolvable getAllowCheckIn();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#allow_check_in LicensemanagerLicense#allow_check_in}.

---

##### `maxCount`<sup>Optional</sup> <a name="maxCount" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.maxCount"></a>

```java
public java.lang.Number getMaxCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#max_count LicensemanagerLicense#max_count}.

---

##### `overage`<sup>Optional</sup> <a name="overage" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.overage"></a>

```java
public java.lang.Boolean|IResolvable getOverage();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#overage LicensemanagerLicense#overage}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#value LicensemanagerLicense#value}.

---

### LicensemanagerLicenseIssuer <a name="LicensemanagerLicenseIssuer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license.LicensemanagerLicenseIssuer;

LicensemanagerLicenseIssuer.builder()
    .name(java.lang.String)
//  .signKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer.property.signKey">signKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#sign_key LicensemanagerLicense#sign_key}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}.

---

##### `signKey`<sup>Optional</sup> <a name="signKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer.property.signKey"></a>

```java
public java.lang.String getSignKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#sign_key LicensemanagerLicense#sign_key}.

---

### LicensemanagerLicenseLicenseMetadata <a name="LicensemanagerLicenseLicenseMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license.LicensemanagerLicenseLicenseMetadata;

LicensemanagerLicenseLicenseMetadata.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#value LicensemanagerLicense#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#value LicensemanagerLicense#value}.

---

### LicensemanagerLicenseTags <a name="LicensemanagerLicenseTags" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license.LicensemanagerLicenseTags;

LicensemanagerLicenseTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#key LicensemanagerLicense#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#value LicensemanagerLicense#value}

---

### LicensemanagerLicenseValidity <a name="LicensemanagerLicenseValidity" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license.LicensemanagerLicenseValidity;

LicensemanagerLicenseValidity.builder()
    .begin(java.lang.String)
    .end(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity.property.begin">begin</a></code> | <code>java.lang.String</code> | Validity begin date for the license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity.property.end">end</a></code> | <code>java.lang.String</code> | Validity begin date for the license. |

---

##### `begin`<sup>Required</sup> <a name="begin" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity.property.begin"></a>

```java
public java.lang.String getBegin();
```

- *Type:* java.lang.String

Validity begin date for the license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#begin LicensemanagerLicense#begin}

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity.property.end"></a>

```java
public java.lang.String getEnd();
```

- *Type:* java.lang.String

Validity begin date for the license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#end LicensemanagerLicense#end}

---

## Classes <a name="Classes" id="Classes"></a>

### LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference <a name="LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference;

new LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resetAllowEarlyCheckIn">resetAllowEarlyCheckIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resetMaxTimeToLiveInMinutes">resetMaxTimeToLiveInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowEarlyCheckIn` <a name="resetAllowEarlyCheckIn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resetAllowEarlyCheckIn"></a>

```java
public void resetAllowEarlyCheckIn()
```

##### `resetMaxTimeToLiveInMinutes` <a name="resetMaxTimeToLiveInMinutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resetMaxTimeToLiveInMinutes"></a>

```java
public void resetMaxTimeToLiveInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckInInput">allowEarlyCheckInInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutesInput">maxTimeToLiveInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckIn">allowEarlyCheckIn</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutes">maxTimeToLiveInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowEarlyCheckInInput`<sup>Optional</sup> <a name="allowEarlyCheckInInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckInInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowEarlyCheckInInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxTimeToLiveInMinutesInput`<sup>Optional</sup> <a name="maxTimeToLiveInMinutesInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutesInput"></a>

```java
public java.lang.Number getMaxTimeToLiveInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `allowEarlyCheckIn`<sup>Required</sup> <a name="allowEarlyCheckIn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckIn"></a>

```java
public java.lang.Boolean|IResolvable getAllowEarlyCheckIn();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxTimeToLiveInMinutes`<sup>Required</sup> <a name="maxTimeToLiveInMinutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutes"></a>

```java
public java.lang.Number getMaxTimeToLiveInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a>

---


### LicensemanagerLicenseConsumptionConfigurationOutputReference <a name="LicensemanagerLicenseConsumptionConfigurationOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license.LicensemanagerLicenseConsumptionConfigurationOutputReference;

new LicensemanagerLicenseConsumptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putBorrowConfiguration">putBorrowConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putProvisionalConfiguration">putProvisionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetBorrowConfiguration">resetBorrowConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetProvisionalConfiguration">resetProvisionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetRenewType">resetRenewType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBorrowConfiguration` <a name="putBorrowConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putBorrowConfiguration"></a>

```java
public void putBorrowConfiguration(LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putBorrowConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a>

---

##### `putProvisionalConfiguration` <a name="putProvisionalConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putProvisionalConfiguration"></a>

```java
public void putProvisionalConfiguration(LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putProvisionalConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a>

---

##### `resetBorrowConfiguration` <a name="resetBorrowConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetBorrowConfiguration"></a>

```java
public void resetBorrowConfiguration()
```

##### `resetProvisionalConfiguration` <a name="resetProvisionalConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetProvisionalConfiguration"></a>

```java
public void resetProvisionalConfiguration()
```

##### `resetRenewType` <a name="resetRenewType" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetRenewType"></a>

```java
public void resetRenewType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.borrowConfiguration">borrowConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.provisionalConfiguration">provisionalConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.borrowConfigurationInput">borrowConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.provisionalConfigurationInput">provisionalConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.renewTypeInput">renewTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.renewType">renewType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `borrowConfiguration`<sup>Required</sup> <a name="borrowConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.borrowConfiguration"></a>

```java
public LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference getBorrowConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference</a>

---

##### `provisionalConfiguration`<sup>Required</sup> <a name="provisionalConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.provisionalConfiguration"></a>

```java
public LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference getProvisionalConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference</a>

---

##### `borrowConfigurationInput`<sup>Optional</sup> <a name="borrowConfigurationInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.borrowConfigurationInput"></a>

```java
public IResolvable|LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration getBorrowConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a>

---

##### `provisionalConfigurationInput`<sup>Optional</sup> <a name="provisionalConfigurationInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.provisionalConfigurationInput"></a>

```java
public IResolvable|LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration getProvisionalConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a>

---

##### `renewTypeInput`<sup>Optional</sup> <a name="renewTypeInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.renewTypeInput"></a>

```java
public java.lang.String getRenewTypeInput();
```

- *Type:* java.lang.String

---

##### `renewType`<sup>Required</sup> <a name="renewType" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.renewType"></a>

```java
public java.lang.String getRenewType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|LicensemanagerLicenseConsumptionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a>

---


### LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference <a name="LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference;

new LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resetMaxTimeToLiveInMinutes">resetMaxTimeToLiveInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxTimeToLiveInMinutes` <a name="resetMaxTimeToLiveInMinutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resetMaxTimeToLiveInMinutes"></a>

```java
public void resetMaxTimeToLiveInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutesInput">maxTimeToLiveInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutes">maxTimeToLiveInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxTimeToLiveInMinutesInput`<sup>Optional</sup> <a name="maxTimeToLiveInMinutesInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutesInput"></a>

```java
public java.lang.Number getMaxTimeToLiveInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `maxTimeToLiveInMinutes`<sup>Required</sup> <a name="maxTimeToLiveInMinutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutes"></a>

```java
public java.lang.Number getMaxTimeToLiveInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a>

---


### LicensemanagerLicenseEntitlementsList <a name="LicensemanagerLicenseEntitlementsList" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license.LicensemanagerLicenseEntitlementsList;

new LicensemanagerLicenseEntitlementsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.get"></a>

```java
public LicensemanagerLicenseEntitlementsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LicensemanagerLicenseEntitlements> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>>

---


### LicensemanagerLicenseEntitlementsOutputReference <a name="LicensemanagerLicenseEntitlementsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license.LicensemanagerLicenseEntitlementsOutputReference;

new LicensemanagerLicenseEntitlementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetAllowCheckIn">resetAllowCheckIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetMaxCount">resetMaxCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetOverage">resetOverage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowCheckIn` <a name="resetAllowCheckIn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetAllowCheckIn"></a>

```java
public void resetAllowCheckIn()
```

##### `resetMaxCount` <a name="resetMaxCount" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetMaxCount"></a>

```java
public void resetMaxCount()
```

##### `resetOverage` <a name="resetOverage" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetOverage"></a>

```java
public void resetOverage()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.allowCheckInInput">allowCheckInInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.maxCountInput">maxCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.overageInput">overageInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.allowCheckIn">allowCheckIn</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.maxCount">maxCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.overage">overage</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowCheckInInput`<sup>Optional</sup> <a name="allowCheckInInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.allowCheckInInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowCheckInInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxCountInput`<sup>Optional</sup> <a name="maxCountInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.maxCountInput"></a>

```java
public java.lang.Number getMaxCountInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `overageInput`<sup>Optional</sup> <a name="overageInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.overageInput"></a>

```java
public java.lang.Boolean|IResolvable getOverageInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `allowCheckIn`<sup>Required</sup> <a name="allowCheckIn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.allowCheckIn"></a>

```java
public java.lang.Boolean|IResolvable getAllowCheckIn();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxCount`<sup>Required</sup> <a name="maxCount" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.maxCount"></a>

```java
public java.lang.Number getMaxCount();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `overage`<sup>Required</sup> <a name="overage" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.overage"></a>

```java
public java.lang.Boolean|IResolvable getOverage();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.internalValue"></a>

```java
public IResolvable|LicensemanagerLicenseEntitlements getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>

---


### LicensemanagerLicenseIssuerOutputReference <a name="LicensemanagerLicenseIssuerOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license.LicensemanagerLicenseIssuerOutputReference;

new LicensemanagerLicenseIssuerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.resetSignKey">resetSignKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSignKey` <a name="resetSignKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.resetSignKey"></a>

```java
public void resetSignKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.signKeyInput">signKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.signKey">signKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `signKeyInput`<sup>Optional</sup> <a name="signKeyInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.signKeyInput"></a>

```java
public java.lang.String getSignKeyInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `signKey`<sup>Required</sup> <a name="signKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.signKey"></a>

```java
public java.lang.String getSignKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.internalValue"></a>

```java
public IResolvable|LicensemanagerLicenseIssuer getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a>

---


### LicensemanagerLicenseLicenseMetadataList <a name="LicensemanagerLicenseLicenseMetadataList" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license.LicensemanagerLicenseLicenseMetadataList;

new LicensemanagerLicenseLicenseMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.get"></a>

```java
public LicensemanagerLicenseLicenseMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LicensemanagerLicenseLicenseMetadata> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>>

---


### LicensemanagerLicenseLicenseMetadataOutputReference <a name="LicensemanagerLicenseLicenseMetadataOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license.LicensemanagerLicenseLicenseMetadataOutputReference;

new LicensemanagerLicenseLicenseMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.internalValue"></a>

```java
public IResolvable|LicensemanagerLicenseLicenseMetadata getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>

---


### LicensemanagerLicenseTagsList <a name="LicensemanagerLicenseTagsList" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license.LicensemanagerLicenseTagsList;

new LicensemanagerLicenseTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.get"></a>

```java
public LicensemanagerLicenseTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LicensemanagerLicenseTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>>

---


### LicensemanagerLicenseTagsOutputReference <a name="LicensemanagerLicenseTagsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license.LicensemanagerLicenseTagsOutputReference;

new LicensemanagerLicenseTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|LicensemanagerLicenseTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>

---


### LicensemanagerLicenseValidityOutputReference <a name="LicensemanagerLicenseValidityOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license.LicensemanagerLicenseValidityOutputReference;

new LicensemanagerLicenseValidityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.beginInput">beginInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.endInput">endInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.begin">begin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.end">end</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `beginInput`<sup>Optional</sup> <a name="beginInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.beginInput"></a>

```java
public java.lang.String getBeginInput();
```

- *Type:* java.lang.String

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.endInput"></a>

```java
public java.lang.String getEndInput();
```

- *Type:* java.lang.String

---

##### `begin`<sup>Required</sup> <a name="begin" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.begin"></a>

```java
public java.lang.String getBegin();
```

- *Type:* java.lang.String

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.end"></a>

```java
public java.lang.String getEnd();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.internalValue"></a>

```java
public IResolvable|LicensemanagerLicenseValidity getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a>

---



