# `datazoneSubscriptionTarget` Submodule <a name="`datazoneSubscriptionTarget` Submodule" id="@cdktn/provider-awscc.datazoneSubscriptionTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneSubscriptionTarget <a name="DatazoneSubscriptionTarget" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target awscc_datazone_subscription_target}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_subscription_target.DatazoneSubscriptionTarget;

DatazoneSubscriptionTarget.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicableAssetTypes(java.util.List<java.lang.String>)
    .authorizedPrincipals(java.util.List<java.lang.String>)
    .domainIdentifier(java.lang.String)
    .environmentIdentifier(java.lang.String)
    .name(java.lang.String)
    .subscriptionTargetConfig(IResolvable|java.util.List<DatazoneSubscriptionTargetSubscriptionTargetConfig>)
    .type(java.lang.String)
//  .manageAccessRole(java.lang.String)
//  .providerName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.applicableAssetTypes">applicableAssetTypes</a></code> | <code>java.util.List<java.lang.String></code> | The asset types that can be included in the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.authorizedPrincipals">authorizedPrincipals</a></code> | <code>java.util.List<java.lang.String></code> | The authorized principals of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | The ID of the Amazon DataZone domain in which subscription target would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.environmentIdentifier">environmentIdentifier</a></code> | <code>java.lang.String</code> | The ID of the environment in which subscription target would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.subscriptionTargetConfig">subscriptionTargetConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>></code> | The configuration of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.manageAccessRole">manageAccessRole</a></code> | <code>java.lang.String</code> | The manage access role that is used to create the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.providerName">providerName</a></code> | <code>java.lang.String</code> | The provider of the subscription target. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicableAssetTypes`<sup>Required</sup> <a name="applicableAssetTypes" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.applicableAssetTypes"></a>

- *Type:* java.util.List<java.lang.String>

The asset types that can be included in the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#applicable_asset_types DatazoneSubscriptionTarget#applicable_asset_types}

---

##### `authorizedPrincipals`<sup>Required</sup> <a name="authorizedPrincipals" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.authorizedPrincipals"></a>

- *Type:* java.util.List<java.lang.String>

The authorized principals of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#authorized_principals DatazoneSubscriptionTarget#authorized_principals}

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.domainIdentifier"></a>

- *Type:* java.lang.String

The ID of the Amazon DataZone domain in which subscription target would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#domain_identifier DatazoneSubscriptionTarget#domain_identifier}

---

##### `environmentIdentifier`<sup>Required</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.environmentIdentifier"></a>

- *Type:* java.lang.String

The ID of the environment in which subscription target would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#environment_identifier DatazoneSubscriptionTarget#environment_identifier}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#name DatazoneSubscriptionTarget#name}

---

##### `subscriptionTargetConfig`<sup>Required</sup> <a name="subscriptionTargetConfig" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.subscriptionTargetConfig"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>>

The configuration of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#subscription_target_config DatazoneSubscriptionTarget#subscription_target_config}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#type DatazoneSubscriptionTarget#type}

---

##### `manageAccessRole`<sup>Optional</sup> <a name="manageAccessRole" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.manageAccessRole"></a>

- *Type:* java.lang.String

The manage access role that is used to create the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#manage_access_role DatazoneSubscriptionTarget#manage_access_role}

---

##### `providerName`<sup>Optional</sup> <a name="providerName" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.providerName"></a>

- *Type:* java.lang.String

The provider of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#provider_name DatazoneSubscriptionTarget#provider_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.putSubscriptionTargetConfig">putSubscriptionTargetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetManageAccessRole">resetManageAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetProviderName">resetProviderName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSubscriptionTargetConfig` <a name="putSubscriptionTargetConfig" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.putSubscriptionTargetConfig"></a>

```java
public void putSubscriptionTargetConfig(IResolvable|java.util.List<DatazoneSubscriptionTargetSubscriptionTargetConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.putSubscriptionTargetConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>>

---

##### `resetManageAccessRole` <a name="resetManageAccessRole" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetManageAccessRole"></a>

```java
public void resetManageAccessRole()
```

##### `resetProviderName` <a name="resetProviderName" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetProviderName"></a>

```java
public void resetProviderName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatazoneSubscriptionTarget resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isConstruct"></a>

```java
import io.cdktn.providers.awscc.datazone_subscription_target.DatazoneSubscriptionTarget;

DatazoneSubscriptionTarget.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.datazone_subscription_target.DatazoneSubscriptionTarget;

DatazoneSubscriptionTarget.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.datazone_subscription_target.DatazoneSubscriptionTarget;

DatazoneSubscriptionTarget.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.datazone_subscription_target.DatazoneSubscriptionTarget;

DatazoneSubscriptionTarget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatazoneSubscriptionTarget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DatazoneSubscriptionTarget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatazoneSubscriptionTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatazoneSubscriptionTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneSubscriptionTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetConfig">subscriptionTargetConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList">DatazoneSubscriptionTargetSubscriptionTargetConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetId">subscriptionTargetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.applicableAssetTypesInput">applicableAssetTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.authorizedPrincipalsInput">authorizedPrincipalsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainIdentifierInput">domainIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentIdentifierInput">environmentIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.manageAccessRoleInput">manageAccessRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.providerNameInput">providerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetConfigInput">subscriptionTargetConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.applicableAssetTypes">applicableAssetTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.authorizedPrincipals">authorizedPrincipals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentIdentifier">environmentIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.manageAccessRole">manageAccessRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.providerName">providerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `subscriptionTargetConfig`<sup>Required</sup> <a name="subscriptionTargetConfig" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetConfig"></a>

```java
public DatazoneSubscriptionTargetSubscriptionTargetConfigList getSubscriptionTargetConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList">DatazoneSubscriptionTargetSubscriptionTargetConfigList</a>

---

##### `subscriptionTargetId`<sup>Required</sup> <a name="subscriptionTargetId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetId"></a>

```java
public java.lang.String getSubscriptionTargetId();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

---

##### `applicableAssetTypesInput`<sup>Optional</sup> <a name="applicableAssetTypesInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.applicableAssetTypesInput"></a>

```java
public java.util.List<java.lang.String> getApplicableAssetTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorizedPrincipalsInput`<sup>Optional</sup> <a name="authorizedPrincipalsInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.authorizedPrincipalsInput"></a>

```java
public java.util.List<java.lang.String> getAuthorizedPrincipalsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domainIdentifierInput`<sup>Optional</sup> <a name="domainIdentifierInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainIdentifierInput"></a>

```java
public java.lang.String getDomainIdentifierInput();
```

- *Type:* java.lang.String

---

##### `environmentIdentifierInput`<sup>Optional</sup> <a name="environmentIdentifierInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentIdentifierInput"></a>

```java
public java.lang.String getEnvironmentIdentifierInput();
```

- *Type:* java.lang.String

---

##### `manageAccessRoleInput`<sup>Optional</sup> <a name="manageAccessRoleInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.manageAccessRoleInput"></a>

```java
public java.lang.String getManageAccessRoleInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.providerNameInput"></a>

```java
public java.lang.String getProviderNameInput();
```

- *Type:* java.lang.String

---

##### `subscriptionTargetConfigInput`<sup>Optional</sup> <a name="subscriptionTargetConfigInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetConfigInput"></a>

```java
public IResolvable|java.util.List<DatazoneSubscriptionTargetSubscriptionTargetConfig> getSubscriptionTargetConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `applicableAssetTypes`<sup>Required</sup> <a name="applicableAssetTypes" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.applicableAssetTypes"></a>

```java
public java.util.List<java.lang.String> getApplicableAssetTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorizedPrincipals`<sup>Required</sup> <a name="authorizedPrincipals" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.authorizedPrincipals"></a>

```java
public java.util.List<java.lang.String> getAuthorizedPrincipals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainIdentifier"></a>

```java
public java.lang.String getDomainIdentifier();
```

- *Type:* java.lang.String

---

##### `environmentIdentifier`<sup>Required</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentIdentifier"></a>

```java
public java.lang.String getEnvironmentIdentifier();
```

- *Type:* java.lang.String

---

##### `manageAccessRole`<sup>Required</sup> <a name="manageAccessRole" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.manageAccessRole"></a>

```java
public java.lang.String getManageAccessRole();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneSubscriptionTargetConfig <a name="DatazoneSubscriptionTargetConfig" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_subscription_target.DatazoneSubscriptionTargetConfig;

DatazoneSubscriptionTargetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicableAssetTypes(java.util.List<java.lang.String>)
    .authorizedPrincipals(java.util.List<java.lang.String>)
    .domainIdentifier(java.lang.String)
    .environmentIdentifier(java.lang.String)
    .name(java.lang.String)
    .subscriptionTargetConfig(IResolvable|java.util.List<DatazoneSubscriptionTargetSubscriptionTargetConfig>)
    .type(java.lang.String)
//  .manageAccessRole(java.lang.String)
//  .providerName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.applicableAssetTypes">applicableAssetTypes</a></code> | <code>java.util.List<java.lang.String></code> | The asset types that can be included in the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.authorizedPrincipals">authorizedPrincipals</a></code> | <code>java.util.List<java.lang.String></code> | The authorized principals of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | The ID of the Amazon DataZone domain in which subscription target would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.environmentIdentifier">environmentIdentifier</a></code> | <code>java.lang.String</code> | The ID of the environment in which subscription target would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.subscriptionTargetConfig">subscriptionTargetConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>></code> | The configuration of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.manageAccessRole">manageAccessRole</a></code> | <code>java.lang.String</code> | The manage access role that is used to create the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.providerName">providerName</a></code> | <code>java.lang.String</code> | The provider of the subscription target. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicableAssetTypes`<sup>Required</sup> <a name="applicableAssetTypes" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.applicableAssetTypes"></a>

```java
public java.util.List<java.lang.String> getApplicableAssetTypes();
```

- *Type:* java.util.List<java.lang.String>

The asset types that can be included in the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#applicable_asset_types DatazoneSubscriptionTarget#applicable_asset_types}

---

##### `authorizedPrincipals`<sup>Required</sup> <a name="authorizedPrincipals" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.authorizedPrincipals"></a>

```java
public java.util.List<java.lang.String> getAuthorizedPrincipals();
```

- *Type:* java.util.List<java.lang.String>

The authorized principals of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#authorized_principals DatazoneSubscriptionTarget#authorized_principals}

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.domainIdentifier"></a>

```java
public java.lang.String getDomainIdentifier();
```

- *Type:* java.lang.String

The ID of the Amazon DataZone domain in which subscription target would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#domain_identifier DatazoneSubscriptionTarget#domain_identifier}

---

##### `environmentIdentifier`<sup>Required</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.environmentIdentifier"></a>

```java
public java.lang.String getEnvironmentIdentifier();
```

- *Type:* java.lang.String

The ID of the environment in which subscription target would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#environment_identifier DatazoneSubscriptionTarget#environment_identifier}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#name DatazoneSubscriptionTarget#name}

---

##### `subscriptionTargetConfig`<sup>Required</sup> <a name="subscriptionTargetConfig" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.subscriptionTargetConfig"></a>

```java
public IResolvable|java.util.List<DatazoneSubscriptionTargetSubscriptionTargetConfig> getSubscriptionTargetConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>>

The configuration of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#subscription_target_config DatazoneSubscriptionTarget#subscription_target_config}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#type DatazoneSubscriptionTarget#type}

---

##### `manageAccessRole`<sup>Optional</sup> <a name="manageAccessRole" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.manageAccessRole"></a>

```java
public java.lang.String getManageAccessRole();
```

- *Type:* java.lang.String

The manage access role that is used to create the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#manage_access_role DatazoneSubscriptionTarget#manage_access_role}

---

##### `providerName`<sup>Optional</sup> <a name="providerName" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

The provider of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#provider_name DatazoneSubscriptionTarget#provider_name}

---

### DatazoneSubscriptionTargetSubscriptionTargetConfig <a name="DatazoneSubscriptionTargetSubscriptionTargetConfig" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_subscription_target.DatazoneSubscriptionTargetSubscriptionTargetConfig;

DatazoneSubscriptionTargetSubscriptionTargetConfig.builder()
    .content(java.lang.String)
    .formName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig.property.content">content</a></code> | <code>java.lang.String</code> | The content of the subscription target configuration. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig.property.formName">formName</a></code> | <code>java.lang.String</code> | The form name included in the subscription target configuration. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The content of the subscription target configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#content DatazoneSubscriptionTarget#content}

---

##### `formName`<sup>Required</sup> <a name="formName" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig.property.formName"></a>

```java
public java.lang.String getFormName();
```

- *Type:* java.lang.String

The form name included in the subscription target configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#form_name DatazoneSubscriptionTarget#form_name}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneSubscriptionTargetSubscriptionTargetConfigList <a name="DatazoneSubscriptionTargetSubscriptionTargetConfigList" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_subscription_target.DatazoneSubscriptionTargetSubscriptionTargetConfigList;

new DatazoneSubscriptionTargetSubscriptionTargetConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.get"></a>

```java
public DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazoneSubscriptionTargetSubscriptionTargetConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>>

---


### DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference <a name="DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_subscription_target.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference;

new DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.formNameInput">formNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.formName">formName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `formNameInput`<sup>Optional</sup> <a name="formNameInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.formNameInput"></a>

```java
public java.lang.String getFormNameInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `formName`<sup>Required</sup> <a name="formName" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.formName"></a>

```java
public java.lang.String getFormName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneSubscriptionTargetSubscriptionTargetConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>

---



