# `licensemanagerLicenseAssetGroup` Submodule <a name="`licensemanagerLicenseAssetGroup` Submodule" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerLicenseAssetGroup <a name="LicensemanagerLicenseAssetGroup" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group awscc_licensemanager_license_asset_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license_asset_group.LicensemanagerLicenseAssetGroup;

LicensemanagerLicenseAssetGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .associatedLicenseAssetRulesetArNs(java.util.List<java.lang.String>)
    .licenseAssetGroupConfigurations(IResolvable|java.util.List<LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .properties(IResolvable|java.util.List<LicensemanagerLicenseAssetGroupProperties>)
//  .tags(IResolvable|java.util.List<LicensemanagerLicenseAssetGroupTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.associatedLicenseAssetRulesetArNs">associatedLicenseAssetRulesetArNs</a></code> | <code>java.util.List<java.lang.String></code> | ARNs of associated license asset rulesets. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.licenseAssetGroupConfigurations">licenseAssetGroupConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>></code> | License asset group configurations. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | License asset group name. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | License asset group description. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.properties">properties</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>></code> | License asset group properties. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>></code> | Tags to add to the license asset group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `associatedLicenseAssetRulesetArNs`<sup>Required</sup> <a name="associatedLicenseAssetRulesetArNs" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.associatedLicenseAssetRulesetArNs"></a>

- *Type:* java.util.List<java.lang.String>

ARNs of associated license asset rulesets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#associated_license_asset_ruleset_ar_ns LicensemanagerLicenseAssetGroup#associated_license_asset_ruleset_ar_ns}

---

##### `licenseAssetGroupConfigurations`<sup>Required</sup> <a name="licenseAssetGroupConfigurations" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.licenseAssetGroupConfigurations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>>

License asset group configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#license_asset_group_configurations LicensemanagerLicenseAssetGroup#license_asset_group_configurations}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

License asset group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#name LicensemanagerLicenseAssetGroup#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

License asset group description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#description LicensemanagerLicenseAssetGroup#description}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.properties"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>>

License asset group properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#properties LicensemanagerLicenseAssetGroup#properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>>

Tags to add to the license asset group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#tags LicensemanagerLicenseAssetGroup#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.putLicenseAssetGroupConfigurations">putLicenseAssetGroupConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLicenseAssetGroupConfigurations` <a name="putLicenseAssetGroupConfigurations" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.putLicenseAssetGroupConfigurations"></a>

```java
public void putLicenseAssetGroupConfigurations(IResolvable|java.util.List<LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.putLicenseAssetGroupConfigurations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>>

---

##### `putProperties` <a name="putProperties" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.putProperties"></a>

```java
public void putProperties(IResolvable|java.util.List<LicensemanagerLicenseAssetGroupProperties> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.putProperties.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<LicensemanagerLicenseAssetGroupTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LicensemanagerLicenseAssetGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isConstruct"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license_asset_group.LicensemanagerLicenseAssetGroup;

LicensemanagerLicenseAssetGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license_asset_group.LicensemanagerLicenseAssetGroup;

LicensemanagerLicenseAssetGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license_asset_group.LicensemanagerLicenseAssetGroup;

LicensemanagerLicenseAssetGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license_asset_group.LicensemanagerLicenseAssetGroup;

LicensemanagerLicenseAssetGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LicensemanagerLicenseAssetGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LicensemanagerLicenseAssetGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LicensemanagerLicenseAssetGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LicensemanagerLicenseAssetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LicensemanagerLicenseAssetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.licenseAssetGroupArn">licenseAssetGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.licenseAssetGroupConfigurations">licenseAssetGroupConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList">LicensemanagerLicenseAssetGroupPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList">LicensemanagerLicenseAssetGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.associatedLicenseAssetRulesetArNsInput">associatedLicenseAssetRulesetArNsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.licenseAssetGroupConfigurationsInput">licenseAssetGroupConfigurationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.propertiesInput">propertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.associatedLicenseAssetRulesetArNs">associatedLicenseAssetRulesetArNs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `licenseAssetGroupArn`<sup>Required</sup> <a name="licenseAssetGroupArn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.licenseAssetGroupArn"></a>

```java
public java.lang.String getLicenseAssetGroupArn();
```

- *Type:* java.lang.String

---

##### `licenseAssetGroupConfigurations`<sup>Required</sup> <a name="licenseAssetGroupConfigurations" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.licenseAssetGroupConfigurations"></a>

```java
public LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList getLicenseAssetGroupConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.properties"></a>

```java
public LicensemanagerLicenseAssetGroupPropertiesList getProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList">LicensemanagerLicenseAssetGroupPropertiesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.tags"></a>

```java
public LicensemanagerLicenseAssetGroupTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList">LicensemanagerLicenseAssetGroupTagsList</a>

---

##### `associatedLicenseAssetRulesetArNsInput`<sup>Optional</sup> <a name="associatedLicenseAssetRulesetArNsInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.associatedLicenseAssetRulesetArNsInput"></a>

```java
public java.util.List<java.lang.String> getAssociatedLicenseAssetRulesetArNsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `licenseAssetGroupConfigurationsInput`<sup>Optional</sup> <a name="licenseAssetGroupConfigurationsInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.licenseAssetGroupConfigurationsInput"></a>

```java
public IResolvable|java.util.List<LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations> getLicenseAssetGroupConfigurationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.propertiesInput"></a>

```java
public IResolvable|java.util.List<LicensemanagerLicenseAssetGroupProperties> getPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.tagsInput"></a>

```java
public IResolvable|java.util.List<LicensemanagerLicenseAssetGroupTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>>

---

##### `associatedLicenseAssetRulesetArNs`<sup>Required</sup> <a name="associatedLicenseAssetRulesetArNs" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.associatedLicenseAssetRulesetArNs"></a>

```java
public java.util.List<java.lang.String> getAssociatedLicenseAssetRulesetArNs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerLicenseAssetGroupConfig <a name="LicensemanagerLicenseAssetGroupConfig" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license_asset_group.LicensemanagerLicenseAssetGroupConfig;

LicensemanagerLicenseAssetGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .associatedLicenseAssetRulesetArNs(java.util.List<java.lang.String>)
    .licenseAssetGroupConfigurations(IResolvable|java.util.List<LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .properties(IResolvable|java.util.List<LicensemanagerLicenseAssetGroupProperties>)
//  .tags(IResolvable|java.util.List<LicensemanagerLicenseAssetGroupTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.associatedLicenseAssetRulesetArNs">associatedLicenseAssetRulesetArNs</a></code> | <code>java.util.List<java.lang.String></code> | ARNs of associated license asset rulesets. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.licenseAssetGroupConfigurations">licenseAssetGroupConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>></code> | License asset group configurations. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | License asset group name. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | License asset group description. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.properties">properties</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>></code> | License asset group properties. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>></code> | Tags to add to the license asset group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `associatedLicenseAssetRulesetArNs`<sup>Required</sup> <a name="associatedLicenseAssetRulesetArNs" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.associatedLicenseAssetRulesetArNs"></a>

```java
public java.util.List<java.lang.String> getAssociatedLicenseAssetRulesetArNs();
```

- *Type:* java.util.List<java.lang.String>

ARNs of associated license asset rulesets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#associated_license_asset_ruleset_ar_ns LicensemanagerLicenseAssetGroup#associated_license_asset_ruleset_ar_ns}

---

##### `licenseAssetGroupConfigurations`<sup>Required</sup> <a name="licenseAssetGroupConfigurations" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.licenseAssetGroupConfigurations"></a>

```java
public IResolvable|java.util.List<LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations> getLicenseAssetGroupConfigurations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>>

License asset group configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#license_asset_group_configurations LicensemanagerLicenseAssetGroup#license_asset_group_configurations}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

License asset group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#name LicensemanagerLicenseAssetGroup#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

License asset group description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#description LicensemanagerLicenseAssetGroup#description}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.properties"></a>

```java
public IResolvable|java.util.List<LicensemanagerLicenseAssetGroupProperties> getProperties();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>>

License asset group properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#properties LicensemanagerLicenseAssetGroup#properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.tags"></a>

```java
public IResolvable|java.util.List<LicensemanagerLicenseAssetGroupTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>>

Tags to add to the license asset group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#tags LicensemanagerLicenseAssetGroup#tags}

---

### LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations <a name="LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license_asset_group.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations;

LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations.builder()
//  .usageDimension(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations.property.usageDimension">usageDimension</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#usage_dimension LicensemanagerLicenseAssetGroup#usage_dimension}. |

---

##### `usageDimension`<sup>Optional</sup> <a name="usageDimension" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations.property.usageDimension"></a>

```java
public java.lang.String getUsageDimension();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#usage_dimension LicensemanagerLicenseAssetGroup#usage_dimension}.

---

### LicensemanagerLicenseAssetGroupProperties <a name="LicensemanagerLicenseAssetGroupProperties" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license_asset_group.LicensemanagerLicenseAssetGroupProperties;

LicensemanagerLicenseAssetGroupProperties.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#key LicensemanagerLicenseAssetGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#value LicensemanagerLicenseAssetGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#key LicensemanagerLicenseAssetGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#value LicensemanagerLicenseAssetGroup#value}.

---

### LicensemanagerLicenseAssetGroupTags <a name="LicensemanagerLicenseAssetGroupTags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license_asset_group.LicensemanagerLicenseAssetGroupTags;

LicensemanagerLicenseAssetGroupTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#key LicensemanagerLicenseAssetGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#value LicensemanagerLicenseAssetGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#key LicensemanagerLicenseAssetGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#value LicensemanagerLicenseAssetGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList <a name="LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license_asset_group.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList;

new LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.get"></a>

```java
public LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>>

---


### LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference <a name="LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license_asset_group.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference;

new LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.resetUsageDimension">resetUsageDimension</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUsageDimension` <a name="resetUsageDimension" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.resetUsageDimension"></a>

```java
public void resetUsageDimension()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.usageDimensionInput">usageDimensionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.usageDimension">usageDimension</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `usageDimensionInput`<sup>Optional</sup> <a name="usageDimensionInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.usageDimensionInput"></a>

```java
public java.lang.String getUsageDimensionInput();
```

- *Type:* java.lang.String

---

##### `usageDimension`<sup>Required</sup> <a name="usageDimension" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.usageDimension"></a>

```java
public java.lang.String getUsageDimension();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.internalValue"></a>

```java
public IResolvable|LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>

---


### LicensemanagerLicenseAssetGroupPropertiesList <a name="LicensemanagerLicenseAssetGroupPropertiesList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license_asset_group.LicensemanagerLicenseAssetGroupPropertiesList;

new LicensemanagerLicenseAssetGroupPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.get"></a>

```java
public LicensemanagerLicenseAssetGroupPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LicensemanagerLicenseAssetGroupProperties> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>>

---


### LicensemanagerLicenseAssetGroupPropertiesOutputReference <a name="LicensemanagerLicenseAssetGroupPropertiesOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license_asset_group.LicensemanagerLicenseAssetGroupPropertiesOutputReference;

new LicensemanagerLicenseAssetGroupPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|LicensemanagerLicenseAssetGroupProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>

---


### LicensemanagerLicenseAssetGroupTagsList <a name="LicensemanagerLicenseAssetGroupTagsList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license_asset_group.LicensemanagerLicenseAssetGroupTagsList;

new LicensemanagerLicenseAssetGroupTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.get"></a>

```java
public LicensemanagerLicenseAssetGroupTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LicensemanagerLicenseAssetGroupTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>>

---


### LicensemanagerLicenseAssetGroupTagsOutputReference <a name="LicensemanagerLicenseAssetGroupTagsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_license_asset_group.LicensemanagerLicenseAssetGroupTagsOutputReference;

new LicensemanagerLicenseAssetGroupTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|LicensemanagerLicenseAssetGroupTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>

---



